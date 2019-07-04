import styled from 'styled-components'
import media from 'styled-media-query'

export const SearchWrapper = styled.section`
  .ais-SearchBox,
  .ais-Stats {
    padding: 0.5rem 3rem;

    ${media.lessThan('large')`
      padding: 0.5rem 1rem;
    `}
  }

  .ais-SearchBox {
    padding-top: 6rem;

    ${media.lessThan('large')`
      padding-top: 1rem;
    `}
  }

  .ais-Stats {
    color: ${props => props.theme.texts};
  }

  .ais-SearchBox-input {
    background: none;
    border: none;
    border-bottom: 1px solid ${props => props.theme.borders};
    color: ${props => props.theme.texts};
    display: flex;
    font-size: 1.6rem;
    padding: 0.5rem;
    width: 100%;

    &::placeholder {
      color: ${props => props.theme.texts};
    }
  }

  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`
