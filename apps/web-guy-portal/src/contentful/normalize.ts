import { FieldsType, Entry } from 'contentful';

export type ContentfulFieldType = 'array' | 'contentful-object' | 'primitive';

export function getContentfulFieldType(field: FieldsType): ContentfulFieldType | undefined {
  if (Array.isArray(field)) return 'array';

  const fieldType = typeof field;

  if (['string', 'number', 'boolean', 'bigint'].includes(fieldType)) return 'primitive';

  if (fieldType === 'object' && field && 'sys' in field) return 'contentful-object';

  // At this point it means is either a Rich Text or an Asset
  if (fieldType === 'object') return 'primitive';
}

function normalizeArray(fields: FieldsType[]) {
  return fields.map((f: FieldsType) => (f && f.sys ? normalizeContentfulEntry(f as Entry) : f)).filter(Boolean);
}

function normalizePrimitive(field: FieldsType): FieldsType {
  return field;
}

type ContentfulEntry = Record<string, unknown & { fields?: Record<string, unknown> }>;

export const normalizeContentfulEntry = <T = ContentfulEntry>(entry: Entry): T => {
  const cleanField: FieldsType = {};

  const { fields, sys } = entry;
  const { contentType, id } = sys;
  const contentTypeId = contentType?.sys.id;

  for (const [key, field] of Object.entries(fields)) {
    const fieldType = getContentfulFieldType(<FieldsType>field);

    if (fieldType === 'array') {
      cleanField[key] = normalizeArray(<Array<FieldsType>>field);
    } else if (fieldType === 'contentful-object') {
      cleanField[key] = normalizeContentfulEntry<Entry>(<Entry>field);
    } else if (fieldType === 'primitive') {
      cleanField[key] = normalizePrimitive(<FieldsType>field);
    }
  }

  if (contentTypeId) {
    cleanField.contentTypeId = contentTypeId;
  }

  return {
    ...cleanField,
    entryId: id,
  } as T;
};
