import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        font-family: 'Poppins', sans-serif;

        html, body {
            background-color: ${({ theme }) => theme.colors.backgroundBlack};
            color: ${({ theme }) => theme.colors.white};

            ::-webkit-scrollbar {
                width: 10px;
            }

            ::-webkit-scrollbar-track {
                background: ${({ theme }) => theme.colors.darkGray};
            }

            ::-webkit-scrollbar-thumb {
                background: ${({ theme }) => theme.colors.gray};
            }

            ::-webkit-scrollbar-thumb:hover {
                background: ${({ theme }) => theme.colors.mediumGray};
            }
        }
    }
    
`;
