declare namespace echarts {
    namespace EChartOption {
        interface BaseTooltip {
            /**
             * The position of the tooltip's floating layer,
             * which would follow the position of mouse by default.
             *
             * Options:
             * 1. String.
             *   + 'inside' - Center position of the graphic element
             *   where the mouse is in, which is only valid when trigger
             *   is 'item'.
             *   + 'top' - Top position of the graphic element where the mouse
             *   is in, which is only valid when trigger is 'item'.
             *   + 'left' - Left position of the graphic element where the mouse
             *   is in, which is only valid when trigger is 'item'.
             *   + 'right' - Right position of the graphic element where
             *   the mouse is in, which is only valid when trigger is 'item'.
             *   + 'bottom' - Bottom position of the graphic element where
             *   the mouse is in, which is only valid when trigger is 'item'.
             *
             * 2. Object - Object with optional properties such as `top`,
             * `left`, `right` and `bottom` that could be `string` or `number`.
             * e.g. `{left: 10, top: 30}`, or `{right: '20%', bottom: 40}`
             *
             * 3. Array - Display the position of tooltip's floating layer
             * through array, which supports absolute position
             * and relative percentage.
             *
             * 4. Function.
             *   + Parameters:
             *     + point: Mouse position.
             *     + param: The same as formatter.
             *     + dom: The DOM object of tooltip.
             *     + rect: It is valid only when mouse is on graphic elements,
             *       which stands for a bounding box with x, y, width, and height.
             *     + size: The size of dom echarts container.
             *       For example:
             *       `{contentSize: [width, height], viewSize: [width, height]}`
             *   + Return:
             *     position as `String`, `Array` or `Object` described above
             *
             * @see https://echarts.apache.org/en/option.html#tooltip.position
             */
            position?: Tooltip.Position.Type | undefined;

            /**
             * The content formatter of tooltip's floating layer
             * which supports string template and callback function.
             *
             * Types:
             * 1. String.
             * The template variables are `{a}`, `{b}`, `{c}`, `{d}` and `{e}`,
             * which stands for series name, data name and data value and ect.
             * When trigger is set to be `'axis'`, there may be data
             * from multiple series. In this time, series index can be refered
             * as `{a0}`, `{a1}`, or `{a2}`.
             * `{a}`, `{b}`, `{c}`, `{d}` have different meanings
             * for different series types:
             *   + Line (area) charts, bar (column) charts, K charts:
             *   `{a}` for series name,
             *   `{b}` for category name,
             *   `{c}` for data value,
             *   `{d}` for none;
             *   + Scatter (bubble) charts:
             *   `{a}` for series name,
             *   `{b}` for data name,
             *   `{c}` for data value,
             *   `{d}` for none;
             *   + Map:
             *   `{a}` for series name,
             *   `{b}` for area name,
             *   `{c}` for merging data,
             *   `{d}` for none;
             *   + Pie charts, gauge charts, funnel charts:
             *   `{a}` for series name,
             *   `{b}` for data item name,
             *   `{c}` for data value,
             *   `{d}` for percentage.
             *
             * 2. Function.
             * The first parameter params is the data that the formatter needs.
             * Its format is shown as {Format}
             * When trigger is `'axis'`, or when tooltip is triggered by
             * `axisPointer`, params is the data array of multiple series.
             * `Note`: Using array to present all the parameters in ECharts 2.x
             * is not supported anymore.
             * The second parameter ticket is the asynchronous callback flag
             * which should be used along with the third parameter callback
             * when it is used.
             * The third parameter callback is asynchronous callback.
             * When the content of tooltip is acquired asynchronously,
             * ticket and htm as introduced above can be used to update tooltip
             * with callback.
             *
             * @example
             * ```
             *
             * //string
             * formatter: '{b0}: {c0}<br />{b1}: {c1}'
             *
             * // function
             * formatter: function (params, ticket, callback) {
             *     $.get('detail?name=' + params.name, function (content) {
             *         callback(ticket, toHTML(content));
             *     });
             *     return 'Loading';
             * }
             * ```
             */
            formatter?: string | Tooltip.Formatter | undefined;

            /**
             * The background color of tooltip's floating layer.
             *
             * @default 'rgba(50, 50, 50, 0.7)'
             */
            backgroundColor?: string | undefined;

            /**
             * The border color of tooltip's floating layer.
             *
             * @default '#333'
             */
            borderColor?: string | undefined;

            /**
             * The border width of tooltip's floating layer.
             *
             * @default 0
             */
            borderWidth?: number | undefined;

            /**
             * The floating layer of tooltip space around content.
             * The unit is px. Default values for each position are 5.
             * And they can be set to different values with left, right,
             * top, and bottom.
             *
             * @example
             * // Set padding to be 5
             * padding: 5
             * // Set the top and bottom paddings to be 5, and left and right paddings to be 10
             * padding: [5, 10]
             * // Set each of the four paddings seperately
             * padding: [
             *     5,  // up
             *     10, // right
             *     5,  // down
             *     10, // left
             * ]
             *
             * @default 5
             */
            padding?: number | number[] | undefined;

            /**
             * The text style of tooltip's floating layer.
             */
            textStyle?: BaseTextStyle | undefined;

            /**
             * Extra CSS style for floating layer.
             * The following is an example for adding shadow.
             *
             * @example
             * extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
             */
            extraCssText?: string | undefined;
        }

        interface Tooltip extends BaseTooltip {
            /**
             * Whether to show the tooltip component,
             * including tooltip floating layer and `axisPointer`.
             *
             * @default true
             */
            show?: boolean | undefined;

            /**
             * Type of triggering.
             * Options:
             * + `'item'` - Triggered by data item, which is mainly used
             *   for charts that don't have a category axis like scatter
             *   charts or pie charts.
             * + `'axis'` - Triggered by axes, which is mainly used
             *   for charts that have category axes, like bar charts
             *   or line charts.
             *   ECharts 2.x only supports axis trigger for category axis.
             *   In ECharts 3, it is supported for all types of axes in `grid`
             *   or `polar`. Also, you may assign axis with `axisPointer.axis`.
             * + `'none'` - Trigger nothing.
             *
             * @default 'item'
             */
            trigger?: "item" | "axis" | "none" | undefined;

            /**
             * `axisPointer` is a tool for displaying reference line
             * and axis value under mouse pointer.
             *
             * Configuration item for axis indicator.
             * `tooltip.axisPointer` is like syntactic sugar
             * of `axisPointer` settings on axes
             * (for example, `xAxis.axisPointer` or `angleAxis.axisPointer`).
             * More detailed features can be configured
             * on `someAxis.axisPointer`.
             * But in common cases, using `tooltip.axisPinter`
             * is more convenient.
             * Notice: configurations of `tooltip.axisPointer` has
             * lower priority than that of `someAxis.axisPointer`.
             *
             * @see https://echarts.apache.org/en/option.html#tooltip.axisPointer
             */
            axisPointer?: Tooltip.AxisPointer | undefined;

            /**
             * Whether to show the tooltip floating layer,
             * whose default value is true.
             * It should be configurated to be `false`,
             * if you only need tooltip to trigger the event
             * or show the axisPointer without content.
             *
             * @default true
             */
            showContent?: boolean | undefined;

            /**
             * Whether to show tooltip content all the time.
             * By default, it will be hidden after `tooltip.hideDelay`.
             * It can be set to be true to preserve displaying.
             * This attribute is newly added to ECharts 3.0.
             *
             * @default false
             */
            alwaysShowContent?: boolean | undefined;

            /**
             * Conditions to trigger tooltip.
             * Options:
             * + `'mousemove'` - Trigger when mouse moves.
             * + `'click'` - Trigger when mouse clicks.
             * + `'mousemove|click'` - Trigger when mouse clicks and moves.
             *   `'none'` - Do not triggered by `'mousemove'` and `'click'`.
             *   Tooltip can be triggered and hidden manually by calling
             *   `action.tooltip.showTip` and `action.tooltip.hideTip`.
             *   It can also be triggered by `axisPointer.handle` in this case.
             *
             * This attribute is new to ECharts 3.0.
             *
             * @default 'mousemove|click'
             */
            triggerOn?: "mousemove" | "click" | "mousemove|click" | "none" | undefined;

            /**
             * Delay time for showing tooltip, in ms.
             * No delay by default, and it is not recommended to set.
             * Only valid when `triggerOn` is set to be `'mousemove'`.
             *
             * @default 0
             */
            showDelay?: number | undefined;

            /**
             * Delay time for hiding tooltip, in ms.
             * It will be invalid when `alwaysShowContent` is `true`.
             *
             * @default 100
             */
            hideDelay?: number | undefined;

            /**
             * Whether mouse is allowed to enter the floating layer
             * of tooltip, whose default value is false.
             * If you need to interact in the tooltip like with links
             * or buttons, it can be set as `true`.
             *
             * @default true
             */
            enterable?: boolean | undefined;

            /**
             * Render mode for tooltip.
             * By default, it is set to be `'html'` so that extra DOM element
             * is used for tooltip.
             * It can also set to be `'richText'` so that the tooltip
             * will be rendered inside Canvas (SVG rich text is
             * not implemented yet).
             * This is very useful for environments that don't have DOM,
             * such as Wechat applications.
             *
             * @default 'html'
             */
            renderMode?: "html" | undefined;

            /**
             * Whether confine tooltip content in the view rect
             * of chart instance.
             * Useful when tooltip is cut because of `'overflow: hidden'`
             * set on outer dom of chart instance, or because of narrow
             * screen on mobile.
             *
             * @default false
             */
            confine?: boolean | undefined;

            /**
             * The transition duration of tooltip's animation, in seconds.
             * When it is set to be 0, it would move closely with the mouse.
             *
             * @default 0.4
             */
            transitionDuration?: number | undefined;

            /**
             * Since v4.7.0
             *
             * Whether to append the tooltip DOM element as a child of the <body> of the HTML page,
             * when using renderMode 'html'.
             * By default false, means that the tooltip DOM element will be one of a descendant
             * of its echarts DOM container.
             * But that means that the tooltip might be cut when overflow the container
             * if some of the ancestors DOM element of the echarts container are styled with overflow: hidden.
             * This case could also be resolved by setting tooltip.confine, but it might not suitable for all scenarios.
             * Here we provide appendToBody: true to auto append the tooltip element to <body>,
             * which is a common way to resolve this kind of issue.
             * But true is not set as a default value because to void to bring break change
             * for some cases where tooltip is deeply customized and to void some unexpected bad cases.
             *
             * Note that it also works when CSS transform used.
             *
             * @default false
             */
            appendToBody?: boolean | undefined;
        }

        namespace Tooltip {
            namespace Position {
                type Type = Position.Str | Position.Obj | Array<number | string> | Position.Fn;

                type Str = "inside" | "top" | "left" | "right" | "bottom";

                interface Obj {
                    top?: string | number | undefined;
                    right?: string | number | undefined;
                    bottom?: string | number | undefined;
                    left?: string | number | undefined;
                }

                interface Fn {
                    (
                        point: Array<number | string>,
                        params: object | object[],
                        element: HTMLElement,
                        rect: object,
                        size: object,
                    ): Array<number | string> | Obj;
                }
            }

            /**
             * The first parameter params is the data that the formatter needs.
             * Its format is shown as {Format}
             * When trigger is `'axis'`, or when tooltip is triggered by
             * `axisPointer`, params is the data array of multiple series.
             * The content of each item of the array is Format type but, without
             * `percent` field.
             *
             * Note: Using array to present all the parameters in ECharts 2.x
             * is not supported anymore.
             * The second parameter ticket is the asynchronous callback flag
             * which should be used along with the third parameter callback
             * when it is used.
             * The third parameter callback is asynchronous callback.
             * When the content of tooltip is acquired asynchronously,
             * ticket and htm as introduced above can be used to update tooltip
             * with callback.
             *
             * @example
             * formatter: function (params, ticket, callback) {
             *     $.get('detail?name=' + params.name, function (content) {
             *         callback(ticket, toHTML(content));
             *     });
             *     return 'Loading';
             * }
             */
            interface Formatter {
                (params: Format | Format[], ticket: string, callback: (ticket: string, html: string) => void): string;
            }

            interface Format {
                componentType?: "series" | undefined;

                // Series type
                seriesType?: string | undefined;

                // Series index in option.series
                seriesIndex?: number | undefined;

                // Series name
                seriesName?: string | undefined;

                // item marker, string of HTMLElement
                marker?: string | undefined;

                // Data name, or category name
                name?: string | undefined;

                // Data index in input data array
                dataIndex?: number | undefined;

                // Original data as input
                data?: any;

                // Value of data
                value?: number | any[] | undefined;

                // Value of axis
                axisValue?: number | string | undefined;

                // Label of axis value
                axisValueLabel?: string | undefined;

                // encoding info of coordinate system
                // Key: coord, like ('x' 'y' 'radius' 'angle')
                // value: Must be an array, not null/undefined. Contain dimension indices, like:
                // {
                //     x: [2] // values on dimension index 2 are mapped to x axis.
                //     y: [0] // values on dimension index 0 are mapped to y axis.
                // }
                encode?: object | undefined;

                // dimension names list
                dimensionNames?: string[] | undefined;

                // data dimension index, for example 0 or 1 or 2 ...
                // Only work in `radar` series.
                dimensionIndex?: number | undefined;

                // Color of data
                color?: string | undefined;

                // the percentage of pie chart
                percent?: number | undefined;
            }
            interface AxisPointer {
                show?: boolean | undefined;
                type?: "line" | "shadow" | "none" | "cross" | undefined;
                axis?: "auto" | "x" | "y" | "radius" | "angle" | undefined;
                snap?: boolean | undefined;
                z?: number | undefined;
                label?: BasicComponents.CartesianAxis.PointerLabel | undefined;
                lineStyle?: LineStyle | undefined;
                shadowStyle?: {
                    color?: string | undefined;
                    shadowBlur?: number | undefined;
                    shadowColor?: string | undefined;
                    shadowOffsetX?: number | undefined;
                    shadowOffsetY?: number | undefined;
                    opacity?: number | undefined;
                } | undefined;
                // It is valid when axisPointer.type is 'cross'.
                crossStyle?: LineStyle | undefined;
                animation?: boolean | undefined;
                animationThreshold?: number | undefined;
                animationDuration?: number | undefined;
                animationEasing?: string | undefined;
                animationDelay?: number | Function | undefined;
                animationDurationUpdate?: number | Function | undefined;
                animationEasingUpdate?: string | undefined;
                animationDelayUpdate?: number | Function | undefined;
            }
        }
    }
}
