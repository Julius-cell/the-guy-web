import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { useContext } from 'react';
import { LanguageContext } from '../../utils/LanguageContext';
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
    [BLOCKS.LIST_ITEM]: (node: NodeData) => {
      const nodeDocument = node.content[0] as Block;
      const content = nodeDocument.content[0] as Text;
      return <li>{content.value}</li>;
    },
  },
};

export const RichText = ({ className = '', ...props }: RichTextProps) => {
  const { language } = useContext(LanguageContext);

  let richTextDescription;

  if (language === 'ESP' && props.espText) {
    richTextDescription = documentToReactComponents(props.espText, options);
  } else if (language === 'ENG' && props.ingText) {
    richTextDescription = documentToReactComponents(props.ingText, options);
  }
  return <div className={`${className}`}>{richTextDescription}</div>;
};
