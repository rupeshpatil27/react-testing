import { it, expect, describe } from 'vitest'
import { render,screen } from '@testing-library/react'
import { Greet } from '@/components/greet'

describe('group', () => {
    it('should render Hello with name when logged in', () => {
        render(
            <Greet/>
        )

        screen.debug()
    })
})