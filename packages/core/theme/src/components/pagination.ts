import {tv, type VariantProps} from "tailwind-variants";

import {colorVariants, ringClasses} from "../utils";

/**
 * Pagination wrapper **Tailwind Variants** component
 *
 * const {base,cursor, prev, next, item } = pagination({...})
 *
 * @example
 * <ul className={base()} aria-label="pagination navigation">
 *    <li className={cursor()} aria-hidden="true">{active page}</li> // this marks the active page
 *    <li role="button" className={prev()} aria-label="Go to previous page" data-disabled="true">Prev</li>
 *    <li role="button" className={item()} aria-label="page 1" data-active="true">1</li>
 *    <li role="button" className={item()} aria-label="page 2">2</li>
 *    <li role="button" className={item()} aria-hidden="true">...</li>
 *    <li role="button" className={item()} aria-label="page 10">10</li>
 *    <li role="button" className={next()} aria-label="Go to next page">Next</li>
 *  </ul>
 */
const pagination = tv({
  slots: {
    base: "flex flex-wrap relative gap-1 max-w-fit",
    item: "",
    prev: "",
    next: "",
    cursor: [
      "absolute",
      "flex",
      "overflow-visible",
      "items-center",
      "justify-center",
      "origin-center",
      "left-0",
    ],
  },
  variants: {
    variant: {
      bordered: {
        item: ["border-1.5", "border-neutral", "bg-transparent", "hover:bg-neutral-100"],
      },
      light: {
        item: "bg-transparent",
      },
      flat: {},
      faded: {
        item: "border-1.5",
      },
    },
    color: {
      neutral: {
        cursor: colorVariants.solid.neutral,
      },
      primary: {
        cursor: colorVariants.solid.primary,
      },
      secondary: {
        cursor: colorVariants.solid.secondary,
      },
      success: {
        cursor: colorVariants.solid.success,
      },
      warning: {
        cursor: colorVariants.solid.warning,
      },
      danger: {
        cursor: colorVariants.solid.danger,
      },
    },
    size: {
      xs: {},
      sm: {},
      md: {},
      lg: {},
      xl: {},
    },
    radius: {
      none: {},
      base: {},
      sm: {},
      md: {},
      lg: {},
      xl: {},
      full: {},
    },
    isEven: {
      true: {
        base: "gap-0",
        item: [
          "first-of-type:rounded-r-none",
          "last-of-type:rounded-l-none",
          "[&:not(:first-of-type):not(:last-of-type)]:rounded-none",
        ],
      },
    },
    isDisabled: {
      true: {
        base: "opacity-50 pointer-events-none",
      },
    },
    isFocusVisible: {
      true: {
        wrapper: [...ringClasses],
      },
    },
    showShadow: {
      true: {},
    },
    disableAnimation: {
      true: {},
      false: {
        item: "transition-background",
        cursor: ["transition-transform", "!duration-300"],
      },
    },
    disableCursor: {
      true: {
        cursor: "hidden",
      },
    },
  },
  defaultVariants: {
    variant: "flat",
    color: "primary",
    size: "md",
    radius: "xl",
    isEven: false,
    isDisabled: false,
    showShadow: false,
    disableAnimation: false,
    disableCursor: false,
  },
  compoundVariants: [
    // showShadow / color
    {
      showShadow: true,
      color: "neutral",
      class: {
        cursor: colorVariants.shadow.neutral,
      },
    },
    {
      showShadow: true,
      color: "primary",
      class: {
        cursor: colorVariants.shadow.primary,
      },
    },
    {
      showShadow: true,
      color: "secondary",
      class: {
        cursor: colorVariants.shadow.secondary,
      },
    },
    {
      showShadow: true,
      color: "success",
      class: {
        cursor: colorVariants.shadow.success,
      },
    },
    {
      showShadow: true,
      color: "warning",
      class: {
        cursor: colorVariants.shadow.warning,
      },
    },
    {
      showShadow: true,
      color: "danger",
      class: {
        cursor: colorVariants.shadow.danger,
      },
    },
    // isEven / bordered
    {
      isEven: true,
      variant: "bordered",
      class: {
        item: "[&:not(:first-of-type)]:border-l-0",
      },
    },
    /**
     * --------------------------------------------------------
     * disableCursor
     * the styles will be applied to the active item
     * --------------------------------------------------------
     */
    // disableCursor / color
    {
      disableCursor: true,
      color: "neutral",
      class: {
        item: [
          "data-[active=true]:bg-neutral-400",
          "data-[active=true]:border-neutral-400",
          "data-[active=true]:text-neutral-contrastText",
        ],
      },
    },
    {
      disableCursor: true,
      color: "primary",
      class: {
        item: [
          "data-[active=true]:bg-primary",
          "data-[active=true]:border-primary",
          "data-[active=true]:text-primary-contrastText",
        ],
      },
    },
    {
      disableCursor: true,
      color: "secondary",
      class: {
        item: [
          "data-[active=true]:bg-secondary",
          "data-[active=true]:border-secondary",
          "data-[active=true]:text-secondary-contrastText",
        ],
      },
    },
    {
      disableCursor: true,
      color: "success",
      class: {
        item: [
          "data-[active=true]:bg-success",
          "data-[active=true]:border-success",
          "data-[active=true]:text-success-contrastText",
        ],
      },
    },
    {
      disableCursor: true,
      color: "warning",
      class: {
        item: [
          "data-[active=true]:bg-warning",
          "data-[active=true]:border-warning",
          "data-[active=true]:text-warning-contrastText",
        ],
      },
    },
    {
      disableCursor: true,
      color: "danger",
      class: {
        item: [
          "data-[active=true]:bg-danger",
          "data-[active=true]:border-danger",
          "data-[active=true]:text-danger-contrastText",
        ],
      },
    },
    // shadow / color
    {
      disableCursor: true,
      showShadow: true,
      color: "neutral",
      class: {
        item: ["data-[active=true]:shadow-lg", "data-[active=true]:shadow-neutral/50"],
      },
    },
    {
      disableCursor: true,
      showShadow: true,
      color: "primary",
      class: {
        item: ["data-[active=true]:shadow-lg", "data-[active=true]:shadow-primary/40"],
      },
    },
    {
      disableCursor: true,
      showShadow: true,
      color: "secondary",
      class: {
        item: ["data-[active=true]:shadow-lg", "data-[active=true]:shadow-secondary/40"],
      },
    },
    {
      disableCursor: true,
      showShadow: true,
      color: "success",
      class: {
        item: ["data-[active=true]:shadow-lg", "data-[active=true]:shadow-success/40"],
      },
    },
    {
      disableCursor: true,
      showShadow: true,
      color: "warning",
      class: {
        item: ["data-[active=true]:shadow-lg", "data-[active=true]:shadow-warning/40"],
      },
    },
    {
      disableCursor: true,
      showShadow: true,
      color: "danger",
      class: {
        item: ["data-[active=true]:shadow-lg", "data-[active=true]:shadow-danger/40"],
      },
    },
  ],
  compoundSlots: [
    // without variant
    {
      slots: ["item", "prev", "next"],
      class: [
        "flex",
        "flex-wrap",
        "truncate",
        "box-border",
        "outline-none",
        "items-center",
        "justify-center",
        "bg-neutral-100",
        "hover:bg-neutral-200",
        "active:bg-neutral-300",
        "text-neutral-contrastText",
      ],
    },
    // size
    {
      slots: ["item", "cursor", "prev", "next"],
      size: "xs",
      class: "w-7 h-7 text-xs",
    },
    {
      slots: ["item", "cursor", "prev", "next"],
      size: "sm",
      class: "w-8 h-8 text-sm",
    },
    {
      slots: ["item", "cursor", "prev", "next"],
      size: "md",
      class: "w-9 h-9 text-sm",
    },
    {
      slots: ["item", "cursor", "prev", "next"],
      size: "lg",
      class: "w-10 h-10 text-base",
    },
    {
      slots: ["item", "cursor", "prev", "next"],
      size: "xl",
      class: "w-11 h-11 text-base",
    },
    // radius
    {
      slots: ["item", "cursor", "prev", "next"],
      radius: "none",
      class: "rounded-none",
    },
    {
      slots: ["item", "cursor", "prev", "next"],
      radius: "base",
      class: "rounded-base",
    },
    {
      slots: ["item", "cursor", "prev", "next"],
      radius: "sm",
      class: "rounded-sm",
    },
    {
      slots: ["item", "cursor", "prev", "next"],
      radius: "md",
      class: "rounded",
    },
    {
      slots: ["item", "cursor", "prev", "next"],
      radius: "lg",
      class: "rounded-lg",
    },
    {
      slots: ["item", "cursor", "prev", "next"],
      radius: "xl",
      class: "rounded-xl",
    },
    {
      slots: ["item", "cursor", "prev", "next"],
      radius: "full",
      class: "rounded-full",
    },
  ],
});

export type PaginationVariantProps = VariantProps<typeof pagination>;
export type PaginationSlots = keyof ReturnType<typeof pagination>;

export {pagination};