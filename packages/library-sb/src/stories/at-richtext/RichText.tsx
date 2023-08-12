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
            <br />
          </>
        );
      }
    },
  },
};

export const RichText = ({ descriptionText, className = '' }: RichTextProps) => {
  let richTextDescription;
  if (descriptionText) {
    richTextDescription = documentToReactComponents(descriptionText, options);
  }
  return <div className={`text-justify ${className}`}>{richTextDescription}</div>;
};
