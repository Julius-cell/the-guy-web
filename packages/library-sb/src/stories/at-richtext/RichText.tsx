import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import type { RichTextProps } from '../../types/components-type-props';
import type { NodeData, Block, Text } from '@contentful/rich-text-types';

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: NodeData) => {
      const nodeDocument = node as Block;
      for (let i = 0; i < nodeDocument.content?.length; i++) {
        const { value } = nodeDocument.content[i] as Text;
        return (
          <>
            <p>{value}</p>
            {nodeDocument.content.length > 1 && <br />}
          </>
        );
      }
    },
  },
};

export const RichText = ({ espText, ingText, className = '' }: RichTextProps) => {
  let richTextDescription;
  if (espText) {
    richTextDescription = documentToReactComponents(espText, options);
  } else if (ingText) {
    richTextDescription = documentToReactComponents(ingText, options);
  }
  return <div className={`${className}`}>{richTextDescription}</div>;
};
