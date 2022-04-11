
import { LiraElement } from '/js/lira.js'

export class ParagraphText extends LiraElement {
    constructor () {
        super()
    }

    breakOriginalText () {
        const originalText = this.innerHTML
            .replace('<p>', '')
            .replace('</p>', '')
            .replace(/[ ]{2,}/g, '')
            .trim()

        let paragraphs = originalText.split(/\n\n/)
        
        const finalText = paragraphs
            .map(paragraph => `<p>${paragraph.replace(/\n/g, '<br>')}</p>`)
            .join('')

        return finalText
    }
    
    render () {
        return this.breakOriginalText()
    }
}