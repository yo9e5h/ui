/*
 * Globlal Variables
 *
 */

const defaults = {
  bg: {
    brand: {
      primary: 'bg-purple-600',
      secondary: 'bg-purple-200',
    },
  },
  text: {
    brand: 'text-purple-600',
    body: 'text-scale-600 dark:text-scaleDark-200',
    title: 'text-scale-700 dark:text-scaleDark-100',
  },
  border: {
    brand: 'border-brand-600',
    primary: 'border-scale-700',
    secondary: 'border-scale-400',
    alternative: 'border-scale-600 dark:border-scaleDark-200',
  },
  placeholder: 'placeholder-scale-800',
  focus: `
    outline-none
    focus:ring-current focus:ring-2
  `,
  'focus-visible': `
    outline-none
    focus-visible:ring-current focus-visible:ring-2
  `,
  size: {
    // buttons, inputs, input labels use these sizes
    text: {
      tiny: 'text-xs',
      small: 'text-sm leading-4',
      medium: 'text-sm',
      large: 'text-base',
      xlarge: 'text-base',
    },
    // buttons, inputs, input labels use these sizes
    padding: {
      tiny: 'px-2.5 py-1',
      small: 'px-3 py-2',
      medium: 'px-4 py-2',
      large: 'px-4 py-2',
      xlarge: 'px-6 py-3',
    },
  },
  overlay: {
    base: `absolute inset-0 bg-scale-200 opacity-50`,
    container: `fixed inset-0 transition-opacity`,
  },
}

const utils = {
  border: {
    hover:
      'border-opacity-50 dark:border-opacity-50 hover:border-opacity-100 dark:hover:border-opacity-100',
    fix: 'border-opacity-100 dark:border-opacity-100',
  },
}

const default__padding_and_text = {
  tiny: `${defaults.size.text.tiny} ${defaults.size.padding.tiny}`,
  small: `${defaults.size.text.small} ${defaults.size.padding.small}`,
  medium: `${defaults.size.text.medium} ${defaults.size.padding.medium}`,
  large: `${defaults.size.text.large} ${defaults.size.padding.large}`,
  xlarge: `${defaults.size.text.xlarge} ${defaults.size.padding.xlarge}`,
}

/*
 * Animations
 *
 */

const default___animations = {
  accordion: {
    enter: 'transition-max-height ease-in-out duration-700 overflow-hidden',
    enterFrom: 'max-h-0',
    enterTo: 'max-h-screen',
    leave: 'transition-max-height ease-in-out duration-300 overflow-hidden',
    leaveFrom: 'max-h-screen',
    leaveTo: 'max-h-0',
  },
}

/*
 * Main tailwind utility classes output
 *
 */

export default {
  /*
   * Accordion
   *
   */

  accordion: {
    variants: {
      default: {
        base: `
          flex flex-col
          space-y-3
        `,
        container: `
          group
          first:rounded-tl-md first:rounded-tr-md
          last:rounded-bl-md last:rounded-br-md
          overflow-hidden
        `,
        trigger: `
          flex flex-row
          gap-3
          items-center
          w-full 
          text-left 
          cursor-pointer 

          outline-none
          focus-visible:ring-1
          focus-visible:z-50
          ring-scale-1100
        `,
        content: `
          data-open:animate-slide-down
          data-closed:animate-slide-up
        `,
        panel: `
          py-3
        `,
      },
      bordered: {
        base: `
          flex flex-col
          -space-y-px
        `,
        container: `
          group
          border
          border-scale-700
          
          first:rounded-tl-md first:rounded-tr-md
          last:rounded-bl-md last:rounded-br-md
        `,
        trigger: `
          flex flex-row
          items-center
          px-6 py-4 
          w-full 
          text-left 
          cursor-pointer 
          
          font-medium 
          text-base 
          bg-transparent 

          outline-none
          focus-visible:ring-1
          focus-visible:z-50
          ring-scale-1100
          
          transition-colors
          hover:bg-scale-200

          overflow-hidden

          group-first:rounded-tl-md group-first:rounded-tr-md
          group-last:rounded-bl-md group-last:rounded-br-md
        `,
        content: `
          data-open:animate-slide-down
          data-closed:animate-slide-up
        `,
        panel: `
          px-6 py-3
          border-t border-scale-700
          bg-scale-200
        `,
      },
    },
    justified: `justify-between`,
    chevron: {
      base: `
        text-scale-900
        rotate-0 group-state-open:rotate-180
        duration-200
      `,
      align: {
        left: 'order-first',
        right: 'order-last',
      },
    },
    animate: {
      ...default___animations.accordion,
    },
  },

  /*
   * Badge
   *
   */

  badge: {
    base: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-opacity-10',
    size: {
      large: 'px-3 py-0.5 rounded-full text-sm',
    },
    dot: '-ml-0.5 mr-1.5 h-2 w-2 rounded-full',
    color: {
      brand: 'bg-brand-200 text-brand-1100 border border-brand-700',
      scale: 'bg-scale-200 text-scale-1100 border border-scale-700',
      tomato: `bg-tomato-200 text-tomato-1100 border border-tomato-700`,
      red: `bg-red-200 text-red-1100 border border-red-700`,
      crimson: `bg-crimson-200 text-crimson-1100 border border-crimson-700`,
      pink: `bg-pink-200 text-pink-1100 border border-pink-700`,
      plum: `bg-plum-200 text-plum-1100 border border-plum-700`,
      purple: `bg-purple-200 text-purple-1100 border border-purple-700`,
      violet: `bg-violet-200 text-violet-1100 border border-violet-700`,
      indigo: `bg-indigo-200 text-indigo-1100 border border-indigo-700`,
      blue: `bg-blue-200 text-blue-1100 border border-blue-700`,
      cyan: `bg-cyan-200 text-cyan-1100 border border-cyan-700`,
      teal: `bg-teal-200 text-teal-1100 border border-teal-700`,
      green: `bg-green-200 text-green-1100 border border-green-700`,
      grass: `bg-grass-200 text-grass-1100 border border-grass-700`,
      brown: `bg-brown-200 text-brown-1100 border border-brown-700`,
      orange: `bg-orange-200 text-orange-1100 border border-orange-700`,
      sky: `bg-sky-200 text-sky-1100 border border-sky-700`,
      mint: `bg-mint-200 text-mint-1100 border border-mint-700`,
      lime: `bg-lime-200 text-lime-1100 border border-lime-700`,
      yellow: `bg-yellow-200 text-yellow-1100 border border-yellow-700`,
      amber: `bg-amber-200 text-amber-1100 border border-amber-700`,
      gold: `bg-gold-200 text-gold-1100 border border-gold-700`,
      bronze: `bg-bronze-200 text-bronze-1100 border border-bronze-700`,
      gray: `bg-gray-200 text-gray-1100 border border-gray-700`,
      mauve: `bg-mauve-200 text-mauve-1100 border border-mauve-700`,
      slate: `bg-slate-200 text-slate-1100 border border-slate-700`,
      sage: `bg-sage-200 text-sage-1100 border border-sage-700`,
      olive: `bg-olive-200 text-olive-1100 border border-olive-700`,
      sand: `bg-sand-200 text-sand-1100 border border-sand-700`,
    },
  },

  /*
   * Alert
   *
   */

  alert: {
    base: 'relative rounded py-4 px-6 flex space-x-4 border border-solid border-opacity-20',
    type: {
      danger:
        'bg-red-500 bg-opacity-10 dark:bg-opacity-5 text-red-600 border-red-500',
      warning:
        'bg-yellow-600 bg-opacity-10 dark:bg-opacity-5 text-yellow-600 border-yellow-600',
      info: 'bg-blue-600 bg-opacity-10 dark:bg-opacity-5 text-blue-600 border-blue-600',
      success:
        'bg-green-600 bg-opacity-10 dark:bg-opacity-5 text-green-600 border-green-600',
    },
    description: {
      danger: 'text-sm text-red-600 text-opacity-80',
      warning: 'text-sm text-yellow-600 text-opacity-80',
      info: 'text-sm text-blue-600 text-opacity-80',
      success: 'text-sm text-green-600 text-opacity-80',
    },
    title: 'block text-base leading-none font-normal mb-1',
    close:
      'absolute right-6 top-4 p-0 m-0 cursor-pointer transition ease-in-out bg-transparent border-transparent focus:outline-none text-current opacity-50 hover:opacity-100',
  },

  /*
   * Card
   */

  card: {
    base: `
      bg-white dark:bg-scaleDark-700
      
      border
      ${defaults.border.primary} 

      flex flex-col 
      rounded-md shadow-lg overflow-hidden relative
    `,
    hoverable: 'transition hover:-translate-y-1 hover:shadow-2xl',
    head: `px-8 py-6 flex justify-between 
    border-b
      ${defaults.border.primary} `,
    content: 'p-8',
  },

  /*
   * Tabs
   */

  tabs: {
    base: `w-full justify-between space-y-4`,
    underlined: {
      list: `
        flex items-center border-b 
        ${defaults.border.secondary}
        `,
      base: ` 
        relative 
        cursor-pointer 
        text-scale-900 
        flex 
        items-center 
        space-x-2
        text-center 
        transition
        focus:outline-none 
        focus-visible:ring 
        focus-visible:ring-scale-700
        focus-visible:border-scale-900
      `,
      inactive: `
        hover:text-scale-1200
      `,
      active: `
        text-scale-1200
        border-b-2 border-scale-1200
      `,
    },
    pills: {
      list: 'flex space-x-1',
      base: ` 
        relative 
        cursor-pointer 
        flex 
        items-center 
        space-x-2
        text-center 
        transition
        shadow-sm
        rounded
        focus:outline-none 
        focus-visible:ring 
        focus-visible:ring-scale-700
        focus-visible:border-scale-900
        `,
      inactive: `
        bg-scale-200
        border border-scale-700 hover:border-scale-900
        text-scale-900 hover:text-scale-1200
      `,
      active: `
        bg-scale-1200
        text-scale-200
        border-scale-1200 
      `,
    },
    block: 'w-full flex items-center justify-center',
    size: {
      ...default__padding_and_text,
    },
    scrollable: `overflow-auto whitespace-nowrap`,
    content: `focus:outline-none focus:ring`,
  },

  /*
   * Button
   */

  // button: {
  //   base : 'border border-4'
  // }

  button: {
    base: `
      relative 
      cursor-pointer 
      inline-flex items-center space-x-2 
      text-center 
      font-regular
      transition ease-out duration-200 
      rounded 
      ${defaults['focus-visible']}
      shadow-sm
    `,
    container: 'inline-flex font-medium',
    type: {
      primary: `
        bg-brand-fixed-800 hover:bg-brand-fixed-900
        text-lo-contrast
        border border-brand-800 hover:border-brand-700 
        focus-visible:border-brand-700
        focus-visible:ring-brand-700
      `,
      secondary: `
        bg-scale-1200 hover:bg-scale-1100
        text-scale-100 hover:text-scale-600 focus-visible:text-scale-600 
        border border-scale-1100
        focus-visible:ring-scale-900
      `,
      default: `
        text-scale-1200
        bg-scale-300 hover:bg-scale-500

        dark:bg-scale-400 dark:hover:bg-scale-600

        border border-scale-700 hover:border-scale-900 focus-visible:border-scale-900
        focus-visible:ring-scale-600
      `,
      alternative: `
        bg-brand-200 hover:bg-brand-400
        border border-brand-600 hover:border-brand-800 focus-visible:border-brand-800
        border-opacity-20
        text-brand-1100
        focus-visible:ring-scale-600
      `,
      outline: `
        text-scale-1200 
        bg-transparent 
        border border-scale-700 hover:border-scale-900 focus-visible:border-scale-900
        focus-visible:ring-scale-600
      `,
      dashed: `
        text-scale-1200 
        border
        border-dashed
        border-scale-700 hover:border-scale-900
        bg-transparent
        focus-visible:ring-scale-600
      `,
      link: `
        text-brand-1100
        border
        border-transparent
        hover:bg-brand-400
        border-opacity-0
        bg-opacity-0 dark:bg-opacity-0
        shadow-none
        focus-visible:ring-scale-600
      `,
      text: `
        text-scale-1200 
        hover:bg-scale-500
        shadow-none
        focus-visible:ring-scale-600
      `,
      danger: `
        text-red-1100
        bg-red-200
        border border-red-700 hover:border-red-900 focus-visible:border-red-900
        hover:bg-red-900
        hover:text-lo-contrast
        focus-visible:ring-red-700
      `,
      warning: `
        text-amber-1100
        bg-amber-200
        border border-amber-700 hover:border-amber-900 focus-visible:border-amber-900
        hover:bg-amber-900
        hover:text-hi-contrast
        focus-visible:ring-amber-700
      `,
    },
    block: 'w-full flex items-center justify-center',
    shadow: 'shadow-sm',
    size: {
      ...default__padding_and_text,
    },
    loading: 'animate-spin',
    // disabled prefix is disabled (lol..) by default in tailwind
    // so we apply normal utilities instead, however you can add disabled prefixes if you enabled them in tailwind config.
    // see more: https://tailwindcss.com/docs/hover-focus-and-other-states#disabled
    disabled: 'opacity-50 cursor-not-allowed pointer-events-none',
  },

  /*
   * Input
   */

  input: {
    base: `
      block 
      box-border 
      w-full 
      rounded-md 
      shadow-sm 
      transition-all
      text-scale-1200  
      border
      focus:shadow-md
      ${defaults.focus}
      focus:border-scale-900
      focus:ring-scale-400
      ${defaults.placeholder}
    `,
    variants: {
      standard: `
        bg-scale-200 dark:bg-scale-200
        border border-scale-700
        `,
      error: `
        bg-red-100
        border border-red-700 
        focus:ring-red-500
        placeholder:text-red-600
       `,
    },
    container: 'relative',
    with_icon: 'pl-10',
    size: {
      ...default__padding_and_text,
    },
    disabled: 'opacity-50',
    actions_container:
      'absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center',
    textarea_actions_container:
      'absolute inset-y-1.5 right-0 pl-3 pr-1 flex space-x-1 items-start',
    textarea_actions_container_items: 'flex items-center',
  },

  /*
   * Select
   */

  select: {
    base: `
      block 
      box-border 
      w-full 
      rounded-md 
      shadow-sm 
      transition-all
      text-scale-1200  
      border
      focus:shadow-md
      ${defaults.focus}
      focus:border-scale-900
      focus:ring-scale-400
      ${defaults.placeholder}

      appearance-none
      bg-none
    `,
    variants: {
      standard: `
        bg-scale-200 dark:bg-scale-200
        border border-scale-700
        `,
      error: `
        bg-red-100
        border border-red-700 
        focus:ring-red-500
        placeholder:text-red-600
       `,
    },
    container: 'relative',
    with_icon: 'pl-10',
    size: {
      ...default__padding_and_text,
    },
    disabled: 'opacity-50',
    actions_container:
      'absolute inset-y-0 right-0 pl-3 pr-1 mr-5 flex items-center',
    chevron_container:
      'absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none',
    chevron: 'h-5 w-5 text-scale-600',
  },

  /*
   * Input Number
   */

  inputNumber: {
    base: `
      block
      box-border 
      w-full 
      rounded-md 
      shadow-sm 
      transition-all
      text-scale-1200  
      border
      focus:shadow-md
      ${defaults.focus}
      focus:border-scale-900
      focus:ring-scale-400
      ${defaults.placeholder}

      appearance-none
      bg-none
    `,
    variants: {
      standard: `
        bg-scale-200 dark:bg-scale-200
        border border-scale-700
      `,
      error: `
        bg-red-100
        border border-red-700 
        focus:ring-red-500
        placeholder:text-red-600
       `,
    },
    disabled: 'opacity-50',
    container: 'relative',
    with_icon: 'pl-10',
    size: {
      ...default__padding_and_text,
    },
    actions_container:
      'absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center',
  },

  /*
   *  Checkbox
   *
   * 
   * This Checkbox requires a plugin in your config:
  
    ```
    // tailwind.config.js
    module.exports = {
      // ...
      plugins: [
        // ...
        require('@tailwindcss/forms'),
      ],
    }
    ```
   * 
   * 
  */

  checkbox: {
    base: `
      bg-transparent 
      ${defaults.focus}
      focus:ring-scale-400
      text-brand-900 
      border-scale-700 
      shadow-sm
      rounded
      cursor-pointer
    `,
    container: `flex cursor-pointer leading-none`,
    size: {
      tiny: `h-3 w-3 mt-1 mr-3`,
      small: `h-3.5 w-3.5 mt-0.5 mr-3.5`,
      medium: `h-4 w-4 mt-0.5 mr-3.5`,
      large: `h-5 w-5 mt-0.5 mr-4`,
      xlarge: `h-5 w-5 mt-0.5 mr-4`,
    },
    disabled: 'opacity-50',
    label: {
      base: `text-scale-1100 cursor-pointer`,
      ...defaults.size.text,
    },
    label_before: {
      base: 'text-scale-500',
      ...defaults.size.text,
    },
    label_after: {
      base: 'text-scale-500',
      ...defaults.size.text,
    },
    description: {
      base: `text-scale-900`,
      ...defaults.size.text,
    },
    group: `space-y-3`,
  },

  /*
   *  Radio
   *
   * 
   * This Radio requires a plugin in your config:
  
    ```
    // tailwind.config.js
    module.exports = {
      // ...
      plugins: [
        // ...
        require('@tailwindcss/forms'),
      ],
    }
    ```
   * 
   * 
  */

  radio: {
    base: `
      absolute
      ${defaults.focus}
      focus:ring-brand-400
      border-scale-700
      
      text-brand-900
      shadow-sm
      cursor-pointer
      peer

      bg-scale-300
    `,
    hidden: `absolute opacity-0`,
    size: {
      tiny: `h-3 w-3`,
      small: `h-3.5 w-3.5`,
      medium: `h-4 w-4`,
      large: `h-5 w-5`,
      xlarge: `h-5 w-5`,
    },
    variants: {
      cards: {
        container: {
          base: `relative cursor-pointer flex`,
          align: {
            vertical: 'flex flex-col space-y-1',
            horizontal: 'flex flex-row space-x-2',
          },
        },
        group: `-space-y-px`,
        base: `
          transition
          bg-scale-100 hover:bg-scale-200
          border border-scale-700
          first:rounded-tl-md first:rounded-tr-md
          last:rounded-bl-md last:rounded-br-md
        `,
        size: {
          tiny: `px-5 py-3`,
          small: `px-6 py-4`,
          medium: `px-6 py-4`,
          large: `px-8 p-4`,
          xlarge: `px-8 p-4`,
        },
        active: `
          bg-brand-300 hover:bg-brand-300 z-10
          border-brand-900 border-1
          hover:border-brand-900
        `,
        radio_offset: 'left-4',
      },

      'stacked-cards': {
        container: {
          base: `relative cursor-pointer flex items-center justify-between`,
          align: {
            vertical: 'flex flex-col space-y-1',
            horizontal: 'flex flex-row space-x-2',
          },
        },
        group: `space-y-3`,
        base: `
          transition
          rounded-md
          border
          shadow-sm
        `,
        size: {
          tiny: `px-5 py-3`,
          small: `px-6 py-4`,
          medium: `px-6 py-4`,
          large: `px-8 p-4`,
          xlarge: `px-8 p-4`,
        },
        inactive: `
          bg-scale-400
          border-scale-500
          hover:border-scale-700
        `,
        active: `
          bg-scale-300 dark:bg-scale-500 z-10
          border-scale-900 dark:border-scale-900 border-1
        `,
        radio_offset: 'left-4',
      },

      'small-cards': {
        container: {
          base: `relative cursor-pointer flex`,
          align: {
            vertical: 'flex flex-col space-y-1 items-center justify-center',
            horizontal: 'flex flex-row space-x-2',
          },
        },
        group: `flex flex-row gap-3`,
        base: `
          transition 
          border border-scale-700 hover:border-scale-900 
          rounded-lg 
          grow
          items-center
          flex-wrap
          justify-center
        `,
        size: {
          tiny: `px-5 py-3`,
          small: `px-6 py-4`,
          medium: `px-6 py-4`,
          large: `px-8 p-4`,
          xlarge: `px-8 p-4`,
        },
        inactive: `
          bg-scale-100
          dark:bg-scale-300
          border-scale-400 hover:border-scale-700
        `,
        active: `
          bg-scale-300 dark:bg-brand-300 z-10
          border-scale-900 dark:border-brand-500 border-1
        `,
        radio_offset: 'left-4',
      },

      'large-cards': {
        container: {
          base: `relative cursor-pointer flex`,
          align: {
            vertical: 'flex flex-col space-y-1',
            horizontal: 'flex flex-row space-x-2',
          },
        },
        group: `flex flex-row gap-3`,
        base: `
          transition 
          border border-scale-700 hover:border-scale-900 
          rounded-lg 
          grow
        `,
        size: {
          tiny: `px-5 py-3`,
          small: `px-6 py-4`,
          medium: `px-6 py-4`,
          large: `px-8 p-4`,
          xlarge: `px-8 p-4`,
        },
        active: `
          bg-brand-100 z-10
          border-brand-900 border-1
          hover:border-brand-900
        `,
        radio_offset: 'left-4',
      },

      list: {
        container: {
          base: `relative cursor-pointer flex`,
          size: {
            tiny: `pl-6`,
            small: `pl-6`,
            medium: `pl-7`,
            large: `pl-10`,
            xlarge: `pl-10`,
          },
          align: {
            vertical: 'flex flex-col space-y-1',
            horizontal: 'flex flex-row space-x-2',
          },
        },
        group: `space-y-4`,
        base: ``,
        size: {
          tiny: `0`,
          small: `0`,
          medium: `0`,
          large: `0`,
          xlarge: `0`,
        },
        active: ``,
        radio_offset: 'left-0',
      },
    },
    label: {
      base: `text-scale-1100 cursor-pointer`,
      ...defaults.size.text,
    },
    label_before: {
      base: 'text-scale-500',
      ...defaults.size.text,
    },
    label_after: {
      base: 'text-scale-500',
      ...defaults.size.text,
    },
    description: {
      base: `text-scale-900`,
      ...defaults.size.text,
    },
    optionalLabel: {
      base: `text-scale-900`,
      ...defaults.size.text,
    },
    disabled: `opacity-50 cursor-auto border-dashed`,
  },

  sidepanel: {
    base: `
      bg-scale-100 dark:bg-scale-300
      flex flex-col 
      fixed 
      inset-y-0 
      max-w-full 
      h-screen
      border-l border-overlay-border
      shadow-xl
    `,
    header: `
      space-y-1 py-4 px-4 bg-overlay-bg sm:px-6 
      border-b border-overlay-border
    `,
    content: `
      relative flex-1 px-4 sm:px-6 py-4
    `,
    footer: `
      flex justify-end gap-2
      p-4 bg-overlay-bg
      border-t border-overlay-border
    `,
    size: {
      medium: `w-screen max-w-md h-full`,
      large: `w-screen max-w-2xl h-full`,
    },
    align: {
      left: `
        left-0
        data-open:animate-panel-slide-left-out 
        data-closed:animate-panel-slide-left-in
      `,
      right: `
        right-0
        data-open:animate-panel-slide-right-out 
        data-closed:animate-panel-slide-right-in
      `,
    },
    overlay: `
      fixed
      bg-scale-100
      h-full w-full
      left-0
      top-0 
      opacity-75
      data-closed:animate-fade-out-overlay-bg 
      data-open:animate-fade-in-overlay-bg
    `,
    // this is to reset the button
    // it is advised not to change this
    trigger: `
      border-none bg-transparent p-0 focus:ring-0
    `,
  },

  /*
   *  Toggle
   */

  toggle: {
    base: `
      p-0 relative 
      inline-flex flex-shrink-0 
      h-6 w-11 
      border-2 border-transparent 
      rounded-full 
      cursor-pointer
      transition-colors ease-in-out duration-200
      ${defaults.focus}
      focus:ring-scale-400
      bg-scale-500

      hover:bg-scale-700
    `,
    active: `
      bg-brand-900    
      hover:bg-brand-900    
    `,
    handle_container: {
      tiny: 'h-4 w-7',
      small: 'h-6 w-11',
      medium: 'h-6 w-11',
      large: 'h-7 w-12',
      xlarge: 'h-7 w-12',
    },
    handle: {
      base: `
        inline-block h-5 w-5 
        rounded-full 
        bg-scale-100
        dark:bg-scale-900
        shadow ring-0 
        transition 
        ease-in-out duration-200
      `,
      tiny: 'h-3 w-3',
      small: 'h-5 w-5',
      medium: 'h-5 w-5',
      large: 'h-6 w-6',
      xlarge: 'h-6 w-6',
    },
    handle_active: {
      tiny: ' translate-x-3 dark:bg-white',
      small: 'translate-x-5 dark:bg-white',
      medium: 'translate-x-5 dark:bg-white',
      large: 'translate-x-5 dark:bg-white',
      xlarge: 'translate-x-5 dark:bg-white',
    },
    disabled: 'opacity-75 cursor-not-allowed',
  },

  /*
   *  Form Layout
   */

  form_layout: {
    container: 'grid gap-2',

    flex: {
      left: {
        base: 'flex flex-row gap-6',
        content: ``,
        labels: 'order-2',
        data_input: 'order-1',
      },
      right: {
        base: 'flex flex-row gap-6 justify-between',
        content: `order-last`,
        labels: '',
        data_input: 'text-right',
      },
    },

    responsive: 'md:grid md:grid-cols-12 md:gap-x-4',
    non_responsive: 'grid grid-cols-12 gap-2',

    labels_horizontal_layout:
      'flex flex-row space-x-2 justify-between col-span-12',
    labels_vertical_layout: 'flex flex-col space-y-2 col-span-4',

    data_input_horizontal_layout: 'col-span-12',

    non_box_data_input_spacing_vertical: 'my-3',
    non_box_data_input_spacing_horizontal: 'my-3 md:mt-0 mb-3',

    data_input_vertical_layout: 'col-span-8',

    data_input_vertical_layout__align_right: 'text-right',

    label: {
      base: 'block text-scale-1100',
      size: {
        ...defaults.size.text,
      },
    },
    label_optional: {
      base: 'text-scale-900',
      size: {
        ...defaults.size.text,
      },
    },
    description: {
      base: 'mt-2 text-scale-900',
      size: {
        ...defaults.size.text,
      },
    },
    label_before: {
      base: 'text-scale-500 ',
      size: {
        ...defaults.size.text,
      },
    },
    label_after: {
      base: 'text-scale-500',
      size: {
        ...defaults.size.text,
      },
    },
    error: {
      base: `
        text-red-900 
        transition-all
        data-show:mt-2
        data-show:animate-slide-down-normal
        data-hide:animate-slide-up-normal
      `,
      size: {
        ...defaults.size.text,
      },
    },
    size: {
      tiny: 'text-xs',
      small: 'text-sm leading-4',
      medium: 'text-sm',
      large: 'text-base',
      xlarge: 'text-base',
    },
  },

  /*
   *  Dropdown
   */

  dropdown: {
    // root:
    trigger: `
      border-none 
      rounded
      bg-transparent p-0
      data-open:ring-2
      data-open:ring-scale-900
    `,
    item_nested: `
      border-none
      data-open:bg-scale-300 dark:data-open:bg-scale-500
      data-open:text-scale-1200
    `,
    content: `
      bg-scale-100 dark:bg-scale-300
      border border-scale-300 dark:border-scale-500
      rounded
      shadow-lg
      origin-dropdown
      data-open:animate-dropdown-content-show
      data-closed:animate-dropdown-content-hide
      min-w-fit
      py-1.5
    `,
    size: {
      tiny: `w-40`,
      small: `w-48`,
      medium: `w-64`,
      large: `w-80`,
      xlarge: `w-96`,
      content: `w-auto`,
    },
    arrow: `
      fill-current
      border-0 border-t
    `,
    item: `
      group
      relative
      text-xs
      text-scale-1100
      px-4 py-1.5 flex items-center space-x-2
      cursor-pointer
      focus:bg-scale-300 dark:focus:bg-scale-500
      focus:text-scale-1200
      border-none
      focus:outline-none
    `,
    label: `
      text-scale-900
      px-4 flex items-center space-x-2 py-1.5
      text-xs
    `,
    seperator: `
      w-full
      h-px
      my-2
      bg-scale-300 dark:bg-scale-500
    `,
    misc: `
      px-4 py-1.5
    `,
    check: `
      absolute left-3
      flex items-center
      data-checked:text-scale-1200
    `,
    input: `
      flex items-center space-x-0 pl-8 pr-4
    `,
    right_slot: `
      text-scale-900
      group-focus:text-scale-1000
      absolute
      -translate-y-1/2
      right-2
      top-1/2
    `,
  },

  /*
   *  Popover
   */

  popover: {
    trigger: `
      border-none bg-transparent 
      p-0 
      focus:ring-0
    `,
    content: `
      bg-scale-100 dark:bg-scale-300
      border border-scale-300 dark:border-scale-500
      rounded
      shadow-lg
      data-open:animate-dropdown-content-show
      data-closed:animate-dropdown-content-hide
      min-w-fit

      origin-popover 
      data-open:animate-dropdown-content-show
      data-closed:animate-dropdown-content-hide
    `,
    size: {
      tiny: `w-40`,
      small: `w-48`,
      medium: `w-64`,
      large: `w-80`,
      xlarge: `w-96`,
      content: `w-auto`,
    },
    header: `
      bg-scale-200 dark:bg-scale-400
      space-y-1 py-1.5 px-3
      border-b border-scale-300 dark:border-scale-500
    `,
    footer: `
      bg-scale-200 dark:bg-scale-400
      py-1.5 px-3
      border-t border-scale-300 dark:border-scale-500
    `,
    close: `
      transition
      text-scale-900 hover:text-scale-1100
    `,
    seperator: `
      w-full
      h-px
      my-2
      bg-scale-300 dark:bg-scale-500
    `,
  },

  /*
   * Menu
   */

  menu: {
    item: {
      base: `
        border-l
        px-3 py-1
        cursor-pointer
        flex space-x-3 items-center
        outline-none
        focus-visible:ring-1 ring-scale-1200 focus-visible:z-10 
        group
      `,
      // block
      // border-l
      // pl-4 -ml-px
      // border-transparent
      // hover:border-gray-400
      // dark:hover:border-gray-500
      // text-gray-700
      // hover:text-gray-900
      // dark:text-gray-400
      // dark:hover:text-gray-300
      normal: `
        font-normal
        border-scale-500
        group-hover:border-scale-900`,
      active: `
        font-semibold
        bg-scale-100
        text-scale-900
        z-10
      `,
      bar: `
        border-l-2 
        border-brand-900
        group-hover:border-brand-900
      `,
      content: {
        base: `transition truncate text-sm`,
        normal: `text-scale-1000 group-hover:text-scale-1100`,
        active: `text-brand-900`,
      },
      icon: {
        base: `transition truncate text-sm`,
        normal: `text-scale-800 group-hover:text-scale-900`,
        active: `text-brand-900`,
      },
    },
    group: {
      base: `flex space-x-3 mb-2 mt-4 font-medium`,
      icon: `text-scale-900`,
      content: `text-sm text-scale-1200`,
    },
  },

  /*
   * modal
   */
  modal: {
    base: `
      relative
      bg-scale-100 dark:bg-scale-300
      my-4
      border border-scale-300 dark:border-scale-500
      rounded-md 
      shadow-xl 
      data-open:animate-overlay-show 
      data-closed:animate-overlay-hide  
      overflow-hidden
    `,
    header: `
      bg-scale-200 dark:bg-scale-400
      space-y-1 py-3 px-4 sm:px-5 
      border-b border-scale-300 dark:border-scale-500
    `,
    footer: `
      flex justify-end gap-2
      py-3 px-5 
      border-t border-scale-300 dark:border-scale-500
    `,
    size: {
      tiny: `sm:align-middle sm:w-full sm:max-w-xs`,
      small: `sm:align-middle sm:w-full sm:max-w-sm`,
      medium: `sm:align-middle sm:w-full sm:max-w-lg`,
      large: `sm:align-middle sm:w-full max-w-xl`,
    },
    overlay: `
      fixed
      bg-scale-100
      h-full w-full
      left-0
      top-0 
      opacity-75
      data-closed:animate-fade-out-overlay-bg 
      data-open:animate-fade-in-overlay-bg
    `,
    scroll_overlay: `
      fixed
      inset-0
      grid
      place-items-center
      overflow-y-auto
      data-open:animate-overlay-show data-closed:animate-overlay-hide  
    `,
  },

  // listbox
  listbox: {
    base: `
      block 
      box-border 
      w-full 
      rounded-md 
      shadow-sm 
      text-scale-1200  
      border
      focus:shadow-md
      ${defaults.focus}
      focus:border-scale-900
      focus:ring-scale-400
      ${defaults.placeholder}

      appearance-none

      indent-px
      transition-all

      bg-none
    `,
    variants: {
      standard: `
        bg-scale-200 dark:bg-scale-200
        border border-scale-700

        aria-expanded:border-scale-900
        aria-expanded:ring-scale-400
        aria-expanded:ring-2
        `,
      error: `
        bg-red-100
        border border-red-700 
        focus:ring-red-500
        placeholder:text-red-600
       `,
    },
    options_container: `
      list-none p-0 
      absolute mt-1 w-full 
      bg-white dark:bg-gray-800 
      shadow-lg 
      border border-solid 
      border-gray-100 dark:border-gray-600 max-h-60 
      rounded-md py-1 text-base 
      ring-1 ring-black 
      ring-opacity-5 
      overflow-auto 
      focus:outline-none 
      sm:text-sm z-10`,
    container: 'relative',
    with_icon: 'pl-10',
    size: {
      ...default__padding_and_text,
    },
    disabled: `opacity-50`,
    actions_container:
      'absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center',
  },

  collapsible: {
    content: `
      data-open:animate-slide-down-normal
      data-closed:animate-slide-up-normal
    `,
  },

  inputErrorIcon: {
    base: `
      flex items-center 
      right-3 pr-2 pl-2 
      inset-y-0 
      pointer-events-none
      text-red-900
    `,
  },

  inputIconContainer: {
    base: `
    absolute inset-y-0 
    left-0 pl-3 flex 
    items-center pointer-events-none
    text-gray-600
    dark:text-white
    `,
  },
}
