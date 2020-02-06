import React from 'react'
import {WizardPage} from './WizardPage'
import {text} from '@storybook/addon-knobs'

export default {
	title: "Design System/WizardPage"
}

export const MainWizardPage = () => <WizardPage title={text("Title", "Sample title for form")}>
	<p>This starts the content</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cumque, facere hic incidunt laborum officia soluta! Ducimus est molestiae nulla odio sint? Architecto atque eligendi ipsam laborum molestiae quibusdam saepe.</p>
</WizardPage>
