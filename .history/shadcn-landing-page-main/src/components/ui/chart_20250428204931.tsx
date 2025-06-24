"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export type ChartConfig = Record<
  string,
  {
    label: string
    color: string
  }
>

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config: ChartConfig
}

export function ChartContainer({
  config,
  className,
  children,
  ...props
}: ChartContainerProps) {
  return (
    <div
      className={cn("chart-container", className)}
      style={
        {
          "--color-desktop": config.desktop?.color,
        } as React.CSSProperties
      }
      {...props}
    >
      {children}
    </div>
  )
}

interface ChartTooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  content: React.ReactNode
  cursor?: boolean
}

export function ChartTooltip({
  content,
  cursor = true,
  className,
  ...props
}: ChartTooltipProps) {
  return (
    <div
      className={cn("chart-tooltip", className)}
      style={
        {
          cursor: cursor ? "pointer" : "auto",
        } as React.CSSProperties
      }
      {...props}
    >
      {content}
    </div>
  )
}

interface ChartTooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean
  payload?: Array<{
    name: string
    value: number
    payload: {
      month: string
      desktop: number
    }
  }>
  label?: string
  hideLabel?: boolean
}

export function ChartTooltipContent({
  active,
  payload,
  label,
  hideLabel = false,
  className,
  ...props
}: ChartTooltipContentProps) {
  if (active && payload?.length) {
    return (
      <div
        className={cn(
          "rounded-lg border bg-background p-2 shadow-sm",
          className
        )}
        {...props}
      >
        {!hideLabel && <div className="text-xs font-medium">{label}</div>}
        <div className="flex flex-col gap-0.5">
          {payload.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-1 text-xs font-medium"
            >
              <div
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  backgroundColor: `var(--color-${item.name})`,
                }}
              />
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return null
}
