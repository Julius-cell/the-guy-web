import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import type { NodeData, Document, Block, Text } from '@contentful/rich-text-types';

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: NodeData) => {
      const nodeDocument = node as Block;
      for (let i = 0; i < nodeDocument.content?.length; i++) {
        const { value } = nodeDocument.content[i] as Text;
        return <div>{value}</div>;
      }
    },
  },
};

interface RichTextProps {
  descriptionText: Document | undefined;
}

export const RichText = ({ descriptionText }: RichTextProps) => {
  let richTextDescription;
  if (descriptionText) {
    richTextDescription = documentToReactComponents(descriptionText, options);
  }
  return <div>{richTextDescription}</div>;
};
