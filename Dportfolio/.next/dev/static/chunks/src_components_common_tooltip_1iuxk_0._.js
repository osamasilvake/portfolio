(globalThis['TURBOPACK'] || (globalThis['TURBOPACK'] = [])).push([
	typeof document === 'object' ? document.currentScript : undefined,
	'[project]/src/components/common/tooltip/ToolTip.enum.tsx [app-client] (ecmascript)',
	(__turbopack_context__) => {
		'use strict';

		__turbopack_context__.s(['ToolTipPositionEnum', () => ToolTipPositionEnum]);
		var ToolTipPositionEnum = /*#__PURE__*/ (function (ToolTipPositionEnum) {
			ToolTipPositionEnum['TOP'] = 'top';
			ToolTipPositionEnum['BOTTOM'] = 'bottom';
			ToolTipPositionEnum['LEFT'] = 'left';
			ToolTipPositionEnum['RIGHT'] = 'right';
			return ToolTipPositionEnum;
		})({});
		if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
			__turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
		}
	},
	'[project]/src/components/common/tooltip/ToolTip.tsx [app-client] (ecmascript)',
	(__turbopack_context__) => {
		'use strict';

		__turbopack_context__.s(['default', () => __TURBOPACK__default__export__]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				'[project]/node_modules/.pnpm/next@16.2.7_@babel+core@7.29.7_react-dom@19.2.7_react@19.2.7__react@19.2.7_sass@1.101.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)'
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				'[project]/node_modules/.pnpm/next@16.2.7_@babel+core@7.29.7_react-dom@19.2.7_react@19.2.7__react@19.2.7_sass@1.101.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)'
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$tooltip$2f$ToolTip$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i('[project]/src/components/common/tooltip/ToolTip.enum.tsx [app-client] (ecmascript)');
		var _s = __turbopack_context__.k.signature();
		('use client');
		const ToolTip = (props) => {
			_s();
			const { children, content, position } = props;
			const [isVisible, setIsVisible] = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
				'useState'
			])(false);
			const mouseEnter = () => setIsVisible(true);
			const mouseLeave = () => setIsVisible(false);
			const classes = {
				top:
					position ===
					__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$tooltip$2f$ToolTip$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'ToolTipPositionEnum'
					].TOP
						? 'left-1/2 -translate-x-1/2 bottom-[calc(100%+12px)] z-20'
						: '',
				bottom:
					position ===
					__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$tooltip$2f$ToolTip$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'ToolTipPositionEnum'
					].BOTTOM
						? 'left-1/2 -translate-x-1/2 top-[calc(100%+12px)] z-20'
						: '',
				left:
					position ===
					__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$tooltip$2f$ToolTip$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'ToolTipPositionEnum'
					].LEFT
						? 'top-1/2 -translate-y-1/2 right-[calc(100%+5px)]'
						: '',
				right:
					position ===
					__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$tooltip$2f$ToolTip$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'ToolTipPositionEnum'
					].RIGHT
						? 'top-1/2 -translate-y-1/2 left-[calc(100%+5px)]'
						: ''
			};
			const tooltipPosition = {
				top:
					position ===
					__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$tooltip$2f$ToolTip$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'ToolTipPositionEnum'
					].TOP
						? 'left-1/2 -translate-x-1/2 bottom-full border-l-transparent border-r-transparent border-b border-t-neutral-900 dark:border-t-white'
						: '',
				bottom:
					position ===
					__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$tooltip$2f$ToolTip$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'ToolTipPositionEnum'
					].BOTTOM
						? 'left-1/2 -translate-x-1/2 top-full border-l-transparent border-r-transparent border-t border-b-neutral-900 dark:border-b-white'
						: '',
				left:
					position ===
					__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$tooltip$2f$ToolTip$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'ToolTipPositionEnum'
					].LEFT
						? 'top-1/2 -translate-y-1/2 right-full border-t-transparent border-b-transparent border-r border-l-neutral-900'
						: '',
				right:
					position ===
					__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$tooltip$2f$ToolTip$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'ToolTipPositionEnum'
					].RIGHT
						? 'top-1/2 -translate-y-1/2 left-full border-t-transparent border-b-transparent border-l border-r-neutral-900'
						: ''
			};
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
				'jsxDEV'
			])(
				'div',
				{
					className: 'relative cursor-pointer',
					onMouseEnter: mouseEnter,
					onMouseLeave: mouseLeave,
					children: [
						children,
						isVisible &&
							/*#__PURE__*/ (0,
							__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
								'jsxDEV'
							])(
								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
									'Fragment'
								],
								{
									children: [
										/*#__PURE__*/ (0,
										__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
											'jsxDEV'
										])(
											'span',
											{
												className: `absolute rounded shadow-sm z-10 bg-neutral-900 dark:bg-white 
              text-white dark:text-black text-xs p-2 whitespace-nowrap
              ${classes.top} ${classes.bottom} ${classes.left} ${classes.right}`,
												children: content
											},
											void 0,
											false,
											{
												fileName: '[project]/src/components/common/tooltip/ToolTip.tsx',
												lineNumber: 45,
												columnNumber: 6
											},
											('TURBOPACK compile-time value', void 0)
										),
										/*#__PURE__*/ (0,
										__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
											'jsxDEV'
										])(
											'span',
											{
												className: `absolute pb-1 border-8 dark:border-transparent
              ${tooltipPosition.top} ${tooltipPosition.bottom}
              ${tooltipPosition.left} ${tooltipPosition.right}`
											},
											void 0,
											false,
											{
												fileName: '[project]/src/components/common/tooltip/ToolTip.tsx',
												lineNumber: 51,
												columnNumber: 6
											},
											('TURBOPACK compile-time value', void 0)
										)
									]
								},
								void 0,
								true
							)
					]
				},
				void 0,
				true,
				{
					fileName: '[project]/src/components/common/tooltip/ToolTip.tsx',
					lineNumber: 41,
					columnNumber: 3
				},
				('TURBOPACK compile-time value', void 0)
			);
		};
		_s(ToolTip, 'QjDZesRvLCmcrZLxgN677nXnVLA=');
		_c = ToolTip;
		const __TURBOPACK__default__export__ = ToolTip;
		var _c;
		__turbopack_context__.k.register(_c, 'ToolTip');
		if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
			__turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
		}
	}
]);

//# sourceMappingURL=src_components_common_tooltip_1iuxk_0._.js.map
