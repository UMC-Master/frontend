import styled from 'styled-components';

interface TypographyProps {
  variant:
    | 'displayLarge'
    | 'displayMedium'
    | 'displaySmall'
    | 'headingLarge'
    | 'headingMedium'
    | 'headingSmall'
    | 'headingXSmall'
    | 'titleLarge'
    | 'titleMedium'
    | 'titleSmall'
    | 'titleXSmall'
    | 'bodyContent'
    | 'bodyLarge'
    | 'bodyMedium'
    | 'bodySmall';
}

const Typography = styled.p<TypographyProps>`
  ${({ theme, variant }) => {
    const typography = theme.typography;

    switch (variant) {
      /* Display */
      case 'displayLarge':
        return `
          font-size: ${typography.display.large.size};
          font-weight: ${typography.display.large.weight};
          line-height: ${typography.display.large.lineHeight};
          letter-spacing: ${typography.display.large.letterSpacing};
        `;
      case 'displayMedium':
        return `
          font-size: ${typography.display.medium.size};
          font-weight: ${typography.display.medium.weight};
          line-height: ${typography.display.medium.lineHeight};
          letter-spacing: ${typography.display.medium.letterSpacing};
        `;
      case 'displaySmall':
        return `
          font-size: ${typography.display.small.size};
          font-weight: ${typography.display.small.weight};
          line-height: ${typography.display.small.lineHeight};
          letter-spacing: ${typography.display.small.letterSpacing};
        `;

      /* Heading */
      case 'headingLarge':
        return `
          font-size: ${typography.heading.large.size};
          font-weight: ${typography.heading.large.weight};
          line-height: ${typography.heading.large.lineHeight};
          letter-spacing: ${typography.heading.large.letterSpacing};
        `;
      case 'headingMedium':
        return `
          font-size: ${typography.heading.medium.size};
          font-weight: ${typography.heading.medium.weight};
          line-height: ${typography.heading.medium.lineHeight};
          letter-spacing: ${typography.heading.medium.letterSpacing};
        `;
      case 'headingSmall':
        return `
          font-size: ${typography.heading.small.size};
          font-weight: ${typography.heading.small.weight};
          line-height: ${typography.heading.small.lineHeight};
          letter-spacing: ${typography.heading.small.letterSpacing};
        `;
      case 'headingXSmall':
        return `
          font-size: ${typography.heading.xsmall.size};
          font-weight: ${typography.heading.xsmall.weight};
          line-height: ${typography.heading.xsmall.lineHeight};
          letter-spacing: ${typography.heading.xsmall.letterSpacing};
        `;

      /* Title */
      case 'titleLarge':
        return `
          font-size: ${typography.title.large.size};
          font-weight: ${typography.title.large.weight};
          line-height: ${typography.title.large.lineHeight};
          letter-spacing: ${typography.title.large.letterSpacing};
        `;
      case 'titleMedium':
        return `
          font-size: ${typography.title.medium.size};
          font-weight: ${typography.title.medium.weight};
          line-height: ${typography.title.medium.lineHeight};
          letter-spacing: ${typography.title.medium.letterSpacing};
        `;
      case 'titleSmall':
        return `
          font-size: ${typography.title.small.size};
          font-weight: ${typography.title.small.weight};
          line-height: ${typography.title.small.lineHeight};
          letter-spacing: ${typography.title.small.letterSpacing};
        `;
      case 'titleXSmall':
        return `
          font-size: ${typography.title.xsmall.size};
          font-weight: ${typography.title.xsmall.weight};
          line-height: ${typography.title.xsmall.lineHeight};
          letter-spacing: ${typography.title.xsmall.letterSpacing};
        `;

      /* Body */
      case 'bodyContent':
        return `
          font-size: ${typography.body.content.size};
          font-weight: ${typography.body.content.weight};
          line-height: ${typography.body.content.lineHeight};
          letter-spacing: ${typography.body.content.letterSpacing};
        `;
      case 'bodyLarge':
        return `
          font-size: ${typography.body.large.size};
          font-weight: ${typography.body.large.weight};
          line-height: ${typography.body.large.lineHeight};
          letter-spacing: ${typography.body.large.letterSpacing};
        `;
      case 'bodyMedium':
        return `
          font-size: ${typography.body.medium.size};
          font-weight: ${typography.body.medium.weight};
          line-height: ${typography.body.medium.lineHeight};
          letter-spacing: ${typography.body.medium.letterSpacing};
        `;
      case 'bodySmall':
        return `
          font-size: ${typography.body.small.size};
          font-weight: ${typography.body.small.weight};
          line-height: ${typography.body.small.lineHeight};
          letter-spacing: ${typography.body.small.letterSpacing};
        `;

      default:
        return '';
    }
  }}
`;

export default Typography;
