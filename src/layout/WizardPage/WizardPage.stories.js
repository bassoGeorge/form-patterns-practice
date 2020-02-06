import React from 'react'
import {WizardPage} from './WizardPage'
import {text, withKnobs} from '@storybook/addon-knobs'

export default {
	title: "Design System/WizardPage",
	decorators: [withKnobs]
}

export const MainWizardPage = () => <WizardPage title={text("Title", "Sample title for form")}>
	<p>This starts the content</p>
	<p>{text("Content", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores eaque, eos esse eum ex modi obcaecati quia quidem veniam!")}</p>
</WizardPage>
