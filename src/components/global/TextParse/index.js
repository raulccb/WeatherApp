import React from "react"
import ParsedText from 'react-native-parsed-text'

/**
 * Component Text que permite analisar um texto e extrair partes usando uma
 * expressão regular ou padrões predefinidos. Contudo é possível aplicar estilos
 * e ações dentro de um Text multiline ou não.
 * Maiores informações consulte a documentação em {@link https://github.com/taskrabbit/react-native-parsed-text GitHub}.
 * @component
 * @example
 *   <TextParse parse={{ pattern: /bold/, style: styles.textBold }}>
 *      O texto em bold fica mais visível
 *   </TextParse>
 */
export default function TextParse(props) {

    return (
        <ParsedText
            parse={[props.parse]}
            childrenProps={{ allowFontScaling: false }}
        >
            {props.children}
        </ParsedText>
    )
}
