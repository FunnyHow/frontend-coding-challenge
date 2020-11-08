import { shallowMount } from '@vue/test-utils'
import CheckButton from '@/components/Survey/components/CheckButton'

describe('CheckButton', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(CheckButton, {
      propsData: {
        text: 'Lorem ipsum',
        value: 'dummy-value',
        selected: false,
        disabled: false
      }
    })
  })

  // Complete the following statements by implementing tests for the described behaviours

  it('should exist as a component', () => {
    expect(wrapper.vm).toBeDefined()
  })

  it('should render the text value passed as prop correctly', () => {
    expect(wrapper.text()).toContain('Lorem ipsum')
  })

  it('should not attach the dynamic "check-button--selected" class when the selected prop is set to false', () => {
    expect(wrapper.classes('check-button--selected')).toBe(false)
  })

  it('should attach the dynamic "check-button--selected" class when the selected prop is set to true', async () => {
    await wrapper.setProps({ selected: true })
    expect(wrapper.classes('check-button--selected')).toBe(true)
  })

  // Write additional tests based on the new logic added to the CheckButton component as part of the challenge

  it('should not attach the dynamic "check-button--disabled" class when the disabled prop is set to false', () => {
    expect(wrapper.classes('check-button--disabled')).toBe(false)
  })

  it('should attach the dynamic "check-button--disabled" class when the disabled prop is set to true', async () => {
    await wrapper.setProps({ disabled: true })
    expect(wrapper.classes('check-button--disabled')).toBe(true)
  })

  it('should emit a click event on click', async () => {
    wrapper.vm.$el.click()
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().click).toBeTruthy()
  })
})
