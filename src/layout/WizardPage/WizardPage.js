import React from 'react'
import {FormWrapper, PageWrapper, Title} from './WizardPage.styles'

export function WizardPage({title, children}) {
	return (
		<PageWrapper>
			<FormWrapper>
				{title &&
				<Title>
					{title}
				</Title>
				}
				{children}
			</FormWrapper>
		</PageWrapper>
	)
}
