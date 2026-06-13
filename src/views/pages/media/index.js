/**
 * Based on Google Custom Elements documentation:
 * https://developers.google.com/web/fundamentals/web-components/customelements
 */
import {
    pageTitle,
    channelsData,
    articlesData,
    designData,
} from '../../../contents/media.js'
import { LiraElement } from '/js/lira.js'

// Defines the custom element's class
export class Media extends LiraElement {
    constructor () {
        super()

        document.title = `media • viniciusbs`

        this.useStyle('./styles.css')
    }

    // Defines the component default inner HTML
    render () {
        return `
            <floating-logo></floating-logo>

            <fadein-container>

                <responsive-container mode="full" limitedWidth mainContainer>
                    <h2>${pageTitle}</h2>

                    <section class="video-content">
                        <h3>${channelsData.title}</h3>

                        <responsive-container class="channels" mode="half">
                            ${this.renderEach(Object.entries(channelsData.channels),
                                ([channelId, channelData]) => {
                                    return `
                                    <section class="youtube-profile ${channelId}">
                                        <img src="${channelData.profilePicture}"
                                            alt="${channelData.name}">

                                        <div class="channel-details">
                                            <div class="channel-info">
                                                <h4>${channelData.name}</h4>

                                                <p>
                                                    ${channelData.description}
                                                </p>
                                            </div>

                                            <div class="channel-links">
                                                ${this.renderEach(Object.entries(channelData.links),
                                                    ([icon, props]) => {
                                                        return `
                                                        <social-link icon="${icon}"
                                                            href="${props.url}"
                                                            title="${props.title}"
                                                            ${props.text ? `text="${props.text}` : ''}">
                                                        </social-link>
                                                        `
                                                    }
                                                )}
                                            </div>
                                        </div>
                                    </section>
                                    `
                                }
                            )}
                        </responsive-container>
                    </section>

                    <section class="articles">
                        <h3>${articlesData.title}</h3>
                        <responsive-container mode="sidebar">
                            <section class="articles-details">
                                <a href="${articlesData.mediumData.url}"
                                    title="${articlesData.mediumData.linkTitle}"
                                    aria-label="${articlesData.mediumData.linkTitle}"
                                    target="_blank" rel="noreferrer">

                                    <img src="./images/icons/${articlesData.mediumData.mainIcon}.svg"
                                        alt="Medium logo">
                                
                                    ${articlesData.mediumData.linkText}
                                </a>
                            </section>
                            <section class="articles-main">
                                <p class="articles-description">
                                    ${articlesData.mediumData.description}
                                </p>

                                ${articlesData.mediumData.postDescriptionLinkText ? `
                                    <social-link icon="medium-new"
                                        href="${articlesData.mediumData.url}"
                                        title="${articlesData.mediumData.linkTitle}"
                                        text="${articlesData.mediumData.postDescriptionLinkText}">
                                    </social-link>
                                ` : ""}
                            </section>
                        </responsive-container>
                    </section>

                    ${Object.keys(designData).length > 1 ? `
                        <section class="design">
                            <responsive-container mode="full">
                                <h3>${designData.title}</h3>
                            </responsive-container>
                        </section>
                        ` : ''}
                </responsive-container>

            </fadein-container>
        `
    }
}