import { FONT_SIZE, TEXT_COLOR, Text } from '@/components/atoms/Texts/Text';

export interface Props extends React.ComponentPropsWithoutRef<'div'> {
  label: string;
  help?: string;
}

export const FormItem: React.FC<Props> = ({
  label,
  help,
  children,
  ...attr
}) => (
  <div {...attr}>
    <Text className="form-label">{label}</Text>
    {children}
    {help && (
      <Text
        fontSize={FONT_SIZE.SMALL}
        textColor={TEXT_COLOR.INFO}
        className="form-text"
      >
        {help}
      </Text>
    )}
  </div>
);

/**
 * TODO: margin は一旦 .form-label とか .form-text に頼ってる
 */
