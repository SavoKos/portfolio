import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/font_2796996_3eyuyp6n3wv.js'],
});

function Icon({ type, className, onClick, style }) {
  return (
    <IconFont
      type={type}
      className={className}
      onClick={onClick}
      style={style}
    />
  );
}

export default Icon;
