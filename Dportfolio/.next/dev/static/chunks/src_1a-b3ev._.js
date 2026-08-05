(globalThis['TURBOPACK'] || (globalThis['TURBOPACK'] = [])).push([
	typeof document === 'object' ? document.currentScript : undefined,
	'[project]/src/components/common/scroll-top/BackToTop.tsx [app-client] (ecmascript)',
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
		var _s = __turbopack_context__.k.signature();
		('use client');
		const BackToTopButton = () => {
			_s();
			const [show, setShow] = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
				'useState'
			])(false);
			(0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
				'useEffect'
			])(
				{
					'BackToTopButton.useEffect': () => {
						const handleScroll = {
							'BackToTopButton.useEffect.handleScroll': () => {
								if (window.scrollY > 35) {
									setShow(true);
								} else {
									setShow(false);
								}
							}
						}['BackToTopButton.useEffect.handleScroll'];
						window.addEventListener('scroll', handleScroll);
						// Cleanup function
						return {
							'BackToTopButton.useEffect': () => {
								window.removeEventListener('scroll', handleScroll);
							}
						}['BackToTopButton.useEffect'];
					}
				}['BackToTopButton.useEffect'],
				[]
			);
			const jumpToTop = () => {
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				});
			};
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
				'jsxDEV'
			])(
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
					'Fragment'
				],
				{
					children:
						show &&
						/*#__PURE__*/ (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
							'jsxDEV'
						])(
							'div',
							{
								className: 'fixed bottom-0 right-0 mb-5 mr-5 z-10',
								children: /*#__PURE__*/ (0,
								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
									'jsxDEV'
								])(
									'button',
									{
										onClick: jumpToTop,
										className:
											'bg-black animate-bounce dark:bg-white text-white dark:text-black rounded-full p-1 hover:bg-gray-700 dark:hover:bg-gray-200 transition',
										children: /*#__PURE__*/ (0,
										__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
											'jsxDEV'
										])(
											'svg',
											{
												xmlns: 'http://www.w3.org/2000/svg',
												className: 'h-5 w-5',
												fill: 'none',
												viewBox: '0 0 24 24',
												stroke: 'currentColor',
												children: /*#__PURE__*/ (0,
												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
													'jsxDEV'
												])(
													'path',
													{
														strokeLinecap: 'round',
														strokeLinejoin: 'round',
														strokeWidth: 2,
														d: 'M5 10l7-7m0 0l7 7m-7-7v18'
													},
													void 0,
													false,
													{
														fileName: '[project]/src/components/common/scroll-top/BackToTop.tsx',
														lineNumber: 44,
														columnNumber: 8
													},
													('TURBOPACK compile-time value', void 0)
												)
											},
											void 0,
											false,
											{
												fileName: '[project]/src/components/common/scroll-top/BackToTop.tsx',
												lineNumber: 38,
												columnNumber: 7
											},
											('TURBOPACK compile-time value', void 0)
										)
									},
									void 0,
									false,
									{
										fileName: '[project]/src/components/common/scroll-top/BackToTop.tsx',
										lineNumber: 35,
										columnNumber: 6
									},
									('TURBOPACK compile-time value', void 0)
								)
							},
							void 0,
							false,
							{
								fileName: '[project]/src/components/common/scroll-top/BackToTop.tsx',
								lineNumber: 34,
								columnNumber: 5
							},
							('TURBOPACK compile-time value', void 0)
						)
				},
				void 0,
				false
			);
		};
		_s(BackToTopButton, 'bXBd/WbmO9A8Q7bxaOKZvuJyGc0=');
		_c = BackToTopButton;
		const __TURBOPACK__default__export__ = BackToTopButton;
		var _c;
		__turbopack_context__.k.register(_c, 'BackToTopButton');
		if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
			__turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
		}
	},
	'[project]/src/components/frame/header/color-mode/ColorProvider.tsx [app-client] (ecmascript) <locals>',
	(__turbopack_context__) => {
		'use strict';

		__turbopack_context__.s([]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$4$2e$6_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				'[project]/node_modules/.pnpm/next-themes@0.4.6_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)'
			);
		('use client');
		if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
			__turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
		}
	},
	'[project]/src/components/frame/header/color-mode/ColorProvider.tsx [app-client] (ecmascript)',
	(__turbopack_context__) => {
		'use strict';

		__turbopack_context__.s([
			'ThemeProvider',
			() =>
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$4$2e$6_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
					'ThemeProvider'
				]
		]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$frame$2f$header$2f$color$2d$mode$2f$ColorProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
			__turbopack_context__.i(
				'[project]/src/components/frame/header/color-mode/ColorProvider.tsx [app-client] (ecmascript) <locals>'
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$4$2e$6_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				'[project]/node_modules/.pnpm/next-themes@0.4.6_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)'
			);
	},
	'[project]/src/components/common/icon-button/IconButton.enum.tsx [app-client] (ecmascript)',
	(__turbopack_context__) => {
		'use strict';

		__turbopack_context__.s(['IconButtonVariantEnum', () => IconButtonVariantEnum]);
		var IconButtonVariantEnum = /*#__PURE__*/ (function (IconButtonVariantEnum) {
			IconButtonVariantEnum['SCALE_IN_DEFAULT'] = 'scale_in_default';
			IconButtonVariantEnum['ROTATE_IN_HOVER'] = 'rotate_in_hover';
			return IconButtonVariantEnum;
		})({});
		if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
			__turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
		}
	},
	'[project]/src/components/common/icon-button/IconButton.tsx [app-client] (ecmascript)',
	(__turbopack_context__) => {
		'use strict';

		__turbopack_context__.s(['default', () => __TURBOPACK__default__export__]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				'[project]/node_modules/.pnpm/next@16.2.7_@babel+core@7.29.7_react-dom@19.2.7_react@19.2.7__react@19.2.7_sass@1.101.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)'
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$icon$2d$button$2f$IconButton$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				'[project]/src/components/common/icon-button/IconButton.enum.tsx [app-client] (ecmascript)'
			);
		const IconButton = (props) => {
			const {
				children,
				variant = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$icon$2d$button$2f$IconButton$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
					'IconButtonVariantEnum'
				].SCALE_IN_DEFAULT,
				onClickHandler,
				label
			} = props;
			const variants = {
				scaleInDefault:
					variant ===
					__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$icon$2d$button$2f$IconButton$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'IconButtonVariantEnum'
					].SCALE_IN_DEFAULT
						? 'hover:scale-110 active:scale-100 dark:text-white'
						: '',
				rotateInHover:
					variant ===
					__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$icon$2d$button$2f$IconButton$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'IconButtonVariantEnum'
					].ROTATE_IN_HOVER
						? 'hover:rotate-45'
						: ''
			};
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
				'jsxDEV'
			])(
				'button',
				{
					'aria-label': label,
					onClick: onClickHandler,
					className: `${variants.scaleInDefault} ${variants.rotateInHover}`,
					children: children
				},
				void 0,
				false,
				{
					fileName: '[project]/src/components/common/icon-button/IconButton.tsx',
					lineNumber: 16,
					columnNumber: 3
				},
				('TURBOPACK compile-time value', void 0)
			);
		};
		_c = IconButton;
		const __TURBOPACK__default__export__ = IconButton;
		var _c;
		__turbopack_context__.k.register(_c, 'IconButton');
		if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
			__turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
		}
	},
	'[project]/src/components/frame/header/color-mode/ColorToggle.enum.tsx [app-client] (ecmascript)',
	(__turbopack_context__) => {
		'use strict';

		__turbopack_context__.s(['ColorType', () => ColorType, 'default', () => __TURBOPACK__default__export__]);
		var ColorType = /*#__PURE__*/ (function (ColorType) {
			ColorType['LIGHT'] = 'light';
			ColorType['DARK'] = 'dark';
			return ColorType;
		})({});
		const __TURBOPACK__default__export__ = ColorType;
		if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
			__turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
		}
	},
	'[project]/src/components/frame/header/color-mode/ColorToggle.tsx [app-client] (ecmascript)',
	(__turbopack_context__) => {
		'use strict';

		__turbopack_context__.s(['default', () => __TURBOPACK__default__export__]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				'[project]/node_modules/.pnpm/next@16.2.7_@babel+core@7.29.7_react-dom@19.2.7_react@19.2.7__react@19.2.7_sass@1.101.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)'
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				'[project]/node_modules/.pnpm/next@16.2.7_@babel+core@7.29.7_react-dom@19.2.7_react@19.2.7__react@19.2.7_sass@1.101.0/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)'
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$4$2e$6_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				'[project]/node_modules/.pnpm/next-themes@0.4.6_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)'
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$6$2e$0_react$40$19$2e$2$2e$7$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				'[project]/node_modules/.pnpm/react-icons@5.6.0_react@19.2.7/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)'
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$icon$2d$button$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i('[project]/src/components/common/icon-button/IconButton.tsx [app-client] (ecmascript)');
		var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$frame$2f$header$2f$color$2d$mode$2f$ColorToggle$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				'[project]/src/components/frame/header/color-mode/ColorToggle.enum.tsx [app-client] (ecmascript)'
			);
		var _s = __turbopack_context__.k.signature();
		('use client');
		const ColorToggle = () => {
			_s();
			const { theme, setTheme } = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$4$2e$6_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
				'useTheme'
			])();
			const changeTheme = () => {
				setTheme(
					theme ===
						__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$frame$2f$header$2f$color$2d$mode$2f$ColorToggle$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
							'default'
						].LIGHT
						? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$frame$2f$header$2f$color$2d$mode$2f$ColorToggle$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
								'default'
							].DARK
						: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$frame$2f$header$2f$color$2d$mode$2f$ColorToggle$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
								'default'
							].LIGHT
				);
			};
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
				'jsxDEV'
			])(
				__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$icon$2d$button$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
					'default'
				],
				{
					onClickHandler: changeTheme,
					label: 'Color toggle',
					children: /*#__PURE__*/ (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'jsxDEV'
					])(
						'div',
						{
							className: `flex items-center cursor-pointer transition-transform duration-500 ${theme === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$frame$2f$header$2f$color$2d$mode$2f$ColorToggle$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__['default'].DARK ? 'rotate-180' : 'rotate-0'}`,
							children:
								theme ===
								__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$frame$2f$header$2f$color$2d$mode$2f$ColorToggle$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
									'default'
								].LIGHT
									? /*#__PURE__*/ (0,
										__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
											'jsxDEV'
										])(
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$6$2e$0_react$40$19$2e$2$2e$7$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
												'FiMoon'
											],
											{
												className: 'w-6 h-6 text-black rotate-0 transition-all',
												'aria-label': 'Switch to dark '
											},
											void 0,
											false,
											{
												fileName: '[project]/src/components/frame/header/color-mode/ColorToggle.tsx',
												lineNumber: 24,
												columnNumber: 6
											},
											('TURBOPACK compile-time value', void 0)
										)
									: /*#__PURE__*/ (0,
										__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
											'jsxDEV'
										])(
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$6$2e$0_react$40$19$2e$2$2e$7$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
												'FiSun'
											],
											{
												className: 'w-6 h-6 text-orange-400 rotate-0 transition-all',
												'aria-label': 'Switch to light'
											},
											void 0,
											false,
											{
												fileName: '[project]/src/components/frame/header/color-mode/ColorToggle.tsx',
												lineNumber: 26,
												columnNumber: 6
											},
											('TURBOPACK compile-time value', void 0)
										)
						},
						void 0,
						false,
						{
							fileName: '[project]/src/components/frame/header/color-mode/ColorToggle.tsx',
							lineNumber: 19,
							columnNumber: 4
						},
						('TURBOPACK compile-time value', void 0)
					)
				},
				void 0,
				false,
				{
					fileName: '[project]/src/components/frame/header/color-mode/ColorToggle.tsx',
					lineNumber: 18,
					columnNumber: 3
				},
				('TURBOPACK compile-time value', void 0)
			);
		};
		_s(ColorToggle, '5ABGV54qnXKp6rHn7MS/8MjwRhQ=', false, function () {
			return [
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$4$2e$6_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
					'useTheme'
				]
			];
		});
		_c = ColorToggle;
		const __TURBOPACK__default__export__ = (_c2 = (0,
		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
			'default'
		])((_c1 = () => Promise.resolve(ColorToggle)), {
			ssr: false
		}));
		var _c, _c1, _c2;
		__turbopack_context__.k.register(_c, 'ColorToggle');
		__turbopack_context__.k.register(_c1, '%default%$dynamic');
		__turbopack_context__.k.register(_c2, '%default%');
		if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
			__turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
		}
	},
	'[project]/src/components/frame/header/header-icon/HeaderIcon.tsx [app-client] (ecmascript)',
	(__turbopack_context__) => {
		'use strict';

		__turbopack_context__.s(['default', () => __TURBOPACK__default__export__]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				'[project]/node_modules/.pnpm/next@16.2.7_@babel+core@7.29.7_react-dom@19.2.7_react@19.2.7__react@19.2.7_sass@1.101.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)'
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$icon$2d$button$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i('[project]/src/components/common/icon-button/IconButton.tsx [app-client] (ecmascript)');
		const HeaderIcon = ({ icon }) => {
			const { url, Icon } = icon;
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
				'jsxDEV'
			])(
				__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$icon$2d$button$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
					'default'
				],
				{
					onClickHandler: () => window.open(url, '_blank'),
					children: Icon
				},
				void 0,
				false,
				{
					fileName: '[project]/src/components/frame/header/header-icon/HeaderIcon.tsx',
					lineNumber: 9,
					columnNumber: 9
				},
				('TURBOPACK compile-time value', void 0)
			);
		};
		_c = HeaderIcon;
		const __TURBOPACK__default__export__ = HeaderIcon;
		var _c;
		__turbopack_context__.k.register(_c, 'HeaderIcon');
		if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
			__turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
		}
	},
	'[project]/src/components/frame/header/header-icon/HeaderIcon.enum.tsx [app-client] (ecmascript)',
	(__turbopack_context__) => {
		'use strict';

		__turbopack_context__.s(['HeaderIconType', () => HeaderIconType]);
		var HeaderIconType = /*#__PURE__*/ (function (HeaderIconType) {
			HeaderIconType['GITHUB'] = 'https://www.github.com/';
			HeaderIconType['INSTAGRAM'] = 'https://www.instagram.com/';
			return HeaderIconType;
		})({});
		if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
			__turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
		}
	},
	'[project]/src/components/frame/header/header-icon/HeaderIcon.list.tsx [app-client] (ecmascript)',
	(__turbopack_context__) => {
		'use strict';

		__turbopack_context__.s(['HeaderIcons', () => HeaderIcons]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				'[project]/node_modules/.pnpm/next@16.2.7_@babel+core@7.29.7_react-dom@19.2.7_react@19.2.7__react@19.2.7_sass@1.101.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)'
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$6$2e$0_react$40$19$2e$2$2e$7$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				'[project]/node_modules/.pnpm/react-icons@5.6.0_react@19.2.7/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)'
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$frame$2f$header$2f$header$2d$icon$2f$HeaderIcon$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				'[project]/src/components/frame/header/header-icon/HeaderIcon.enum.tsx [app-client] (ecmascript)'
			);
		const HeaderIcons = [
			{
				Icon: /*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
					'jsxDEV'
				])(
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$6$2e$0_react$40$19$2e$2$2e$7$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'FaGithub'
					],
					{
						className: 'h-6 w-6',
						'aria-label': 'Github'
					},
					void 0,
					false,
					{
						fileName: '[project]/src/components/frame/header/header-icon/HeaderIcon.list.tsx',
						lineNumber: 8,
						columnNumber: 9
					},
					('TURBOPACK compile-time value', void 0)
				),
				url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$frame$2f$header$2f$header$2d$icon$2f$HeaderIcon$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
					'HeaderIconType'
				].GITHUB
			}
		];
		if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
			__turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
		}
	},
	'[project]/src/i18n/routing.ts [app-client] (ecmascript)',
	(__turbopack_context__) => {
		'use strict';

		__turbopack_context__.s([
			'Link',
			() => Link,
			'getPathname',
			() => getPathname,
			'redirect',
			() => redirect,
			'routing',
			() => routing,
			'usePathname',
			() => usePathname,
			'useRouter',
			() => useRouter
		]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$13$2e$0_next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19_65e6481121c1e4617a32da56c368f916$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__ =
			__turbopack_context__.i(
				'[project]/node_modules/.pnpm/next-intl@4.13.0_next@16.2.7_@babel+core@7.29.7_react-dom@19.2.7_react@19.2.7__react@19_65e6481121c1e4617a32da56c368f916/node_modules/next-intl/dist/esm/development/navigation/react-client/createNavigation.js [app-client] (ecmascript) <export default as createNavigation>'
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$13$2e$0_next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19_65e6481121c1e4617a32da56c368f916$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__ =
			__turbopack_context__.i(
				'[project]/node_modules/.pnpm/next-intl@4.13.0_next@16.2.7_@babel+core@7.29.7_react-dom@19.2.7_react@19.2.7__react@19_65e6481121c1e4617a32da56c368f916/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [app-client] (ecmascript) <export default as defineRouting>'
			);
		const routing = (0,
		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$13$2e$0_next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19_65e6481121c1e4617a32da56c368f916$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__[
			'defineRouting'
		])({
			locales: ['en', 'de'],
			defaultLocale: 'en',
			localePrefix: 'never',
			pathnames: {
				'/': '/',
				'/portfolio': '/portfolio',
				'/pathnames': '/pathnames'
			}
		});
		const { Link, getPathname, redirect, usePathname, useRouter } = (0,
		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$13$2e$0_next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19_65e6481121c1e4617a32da56c368f916$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__[
			'createNavigation'
		])(routing);
		if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
			__turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
		}
	},
	'[project]/src/components/frame/header/HeaderLink.tsx [app-client] (ecmascript)',
	(__turbopack_context__) => {
		'use strict';

		__turbopack_context__.s(['default', () => __TURBOPACK__default__export__]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				'[project]/node_modules/.pnpm/next@16.2.7_@babel+core@7.29.7_react-dom@19.2.7_react@19.2.7__react@19.2.7_sass@1.101.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)'
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				'[project]/node_modules/.pnpm/next@16.2.7_@babel+core@7.29.7_react-dom@19.2.7_react@19.2.7__react@19.2.7_sass@1.101.0/node_modules/next/navigation.js [app-client] (ecmascript)'
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i('[project]/src/i18n/routing.ts [app-client] (ecmascript)');
		var _s = __turbopack_context__.k.signature();
		('use client');
		const HeaderLink = ({ href, title }) => {
			_s();
			const selectedLayoutSegment = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
				'useSelectedLayoutSegment'
			])();
			const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
			const isActive = pathname === href;
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
				'jsxDEV'
			])(
				__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
					'Link'
				],
				{
					href: href,
					'aria-current': isActive ? 'page' : undefined,
					className: `py-3 transition-colors inline-block
			 ${isActive ? 'text-green-400 dark:text-green-600 border-b-2 border-b-green-400 dark:border-b-green-600' : 'dark:text-108'}`,
					children: title
				},
				void 0,
				false,
				{
					fileName: '[project]/src/components/frame/header/HeaderLink.tsx',
					lineNumber: 14,
					columnNumber: 3
				},
				('TURBOPACK compile-time value', void 0)
			);
		};
		_s(HeaderLink, 'EP0B1DUsFLeqF3hYB/o5l6/hBWw=', false, function () {
			return [
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
					'useSelectedLayoutSegment'
				]
			];
		});
		_c = HeaderLink;
		const __TURBOPACK__default__export__ = HeaderLink;
		var _c;
		__turbopack_context__.k.register(_c, 'HeaderLink');
		if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
			__turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
		}
	},
	'[project]/src/components/common/button/Button.enum.tsx [app-client] (ecmascript)',
	(__turbopack_context__) => {
		'use strict';

		__turbopack_context__.s(['ButtonVariantEnum', () => ButtonVariantEnum]);
		var ButtonVariantEnum = /*#__PURE__*/ (function (ButtonVariantEnum) {
			ButtonVariantEnum['OUTLINED_IN_DEFAULT'] = 'outlined_in_default';
			ButtonVariantEnum['OUTLINED_IN_PURPLE'] = 'outlined_in_purple';
			ButtonVariantEnum['OUTLINED_IN_LANGUAGE'] = 'outlined_in_language';
			return ButtonVariantEnum;
		})({});
		if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
			__turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
		}
	},
	'[project]/src/components/common/button/Button.tsx [app-client] (ecmascript)',
	(__turbopack_context__) => {
		'use strict';

		__turbopack_context__.s(['default', () => __TURBOPACK__default__export__]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				'[project]/node_modules/.pnpm/next@16.2.7_@babel+core@7.29.7_react-dom@19.2.7_react@19.2.7__react@19.2.7_sass@1.101.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)'
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$button$2f$Button$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i('[project]/src/components/common/button/Button.enum.tsx [app-client] (ecmascript)');
		const Button = (props) => {
			const {
				children,
				active,
				variant = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$button$2f$Button$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
					'ButtonVariantEnum'
				].OUTLINED_IN_DEFAULT,
				isDisabled,
				onClickHandler,
				buttonStyle,
				label,
				ariaPressed
			} = props;
			const variants = {
				disabled: isDisabled ? 'opacity-50 bg-gray-300' : '',
				button: buttonStyle || 'py-2.5 px-5 rounded-md',
				// localEnglish: active === LanguageType.ENGLISH ? 'bg-[#6fb98f] rounded-r-2xl' : '',
				// localGerman: active === LanguageType.GERMAN ? 'bg-[#6fb98f] rounded-l-2xl' : '',
				outlinedInDefault:
					variant ===
					__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$button$2f$Button$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'ButtonVariantEnum'
					].OUTLINED_IN_DEFAULT
						? 'dark:text-108 hover:text-red-700 dark:hover:text-red-400 focus:text-red-800 dark:focus:red-600 outline outline-2 outline-black dark:outline-111 hover:outline-red-800 dark:hover:outline-red-700 focus:outline-red-600 dark:focus:outline-red-800'
						: '',
				outlinedInPurple:
					variant ===
					__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$button$2f$Button$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'ButtonVariantEnum'
					].OUTLINED_IN_PURPLE
						? 'hover:text-yellow-400 dark:hover:text-yellow-800 focus:text-green-800 dark:focus:green-600 outline outline-3 outline-purple-800 dark:outline-white hover:outline-green-800 dark:hover:outline-green-800 focus:outline-green-800 dark:focus:outline-green-800'
						: '',
				outlinedInLanguage:
					variant ===
					__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$button$2f$Button$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'ButtonVariantEnum'
					].OUTLINED_IN_LANGUAGE
						? 'border-none outline-0 text-black dark:text-108  hover:cursor-pointer'
						: ''
			};
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
				'jsxDEV'
			])(
				'button',
				{
					'aria-label': label,
					'aria-pressed': ariaPressed,
					disabled: isDisabled,
					onClick: onClickHandler,
					className: `${variants.disabled}
			  ${variants.button} 
			 ${variants.outlinedInDefault}
			   ${variants.outlinedInPurple} ${active}`,
					children: children
				},
				void 0,
				false,
				{
					fileName: '[project]/src/components/common/button/Button.tsx',
					lineNumber: 37,
					columnNumber: 3
				},
				('TURBOPACK compile-time value', void 0)
			);
		};
		_c = Button;
		const __TURBOPACK__default__export__ = Button;
		var _c;
		__turbopack_context__.k.register(_c, 'Button');
		if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
			__turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
		}
	},
	'[project]/src/components/frame/header/language-mode/LanguageToggle.enum.tsx [app-client] (ecmascript)',
	(__turbopack_context__) => {
		'use strict';

		__turbopack_context__.s(['LanguageType', () => LanguageType]);
		var LanguageType = /*#__PURE__*/ (function (LanguageType) {
			LanguageType['ENGLISH'] = 'en';
			LanguageType['GERMAN'] = 'de';
			return LanguageType;
		})({});
		if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
			__turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
		}
	},
	'[project]/src/components/frame/header/language-mode/LanguageToggle.tsx [app-client] (ecmascript)',
	(__turbopack_context__) => {
		'use strict';

		__turbopack_context__.s(['default', () => __TURBOPACK__default__export__]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				'[project]/node_modules/.pnpm/next@16.2.7_@babel+core@7.29.7_react-dom@19.2.7_react@19.2.7__react@19.2.7_sass@1.101.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)'
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				'[project]/node_modules/.pnpm/next@16.2.7_@babel+core@7.29.7_react-dom@19.2.7_react@19.2.7__react@19.2.7_sass@1.101.0/node_modules/next/navigation.js [app-client] (ecmascript)'
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$intl$40$4$2e$13$2e$0_react$40$19$2e$2$2e$7$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				'[project]/node_modules/.pnpm/use-intl@4.13.0_react@19.2.7/node_modules/use-intl/dist/esm/development/react.js [app-client] (ecmascript)'
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				'[project]/node_modules/.pnpm/next@16.2.7_@babel+core@7.29.7_react-dom@19.2.7_react@19.2.7__react@19.2.7_sass@1.101.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)'
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i('[project]/src/components/common/button/Button.tsx [app-client] (ecmascript)');
		var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$button$2f$Button$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i('[project]/src/components/common/button/Button.enum.tsx [app-client] (ecmascript)');
		var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i('[project]/src/i18n/routing.ts [app-client] (ecmascript)');
		var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$frame$2f$header$2f$language$2d$mode$2f$LanguageToggle$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				'[project]/src/components/frame/header/language-mode/LanguageToggle.enum.tsx [app-client] (ecmascript)'
			);
		var _s = __turbopack_context__.k.signature();
		const LanguageToggle = () => {
			_s();
			const router = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
				'useRouter'
			])();
			const pathname = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
				'usePathname'
			])();
			const params = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
				'useParams'
			])();
			const localActive = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$intl$40$4$2e$13$2e$0_react$40$19$2e$2$2e$7$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
				'useLocale'
			])();
			const onLanguageChange = (locale) => {
				const nextLocale = locale;
				(0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
					'startTransition'
				])(() => {
					router.replace(
						// @ts-expect-error -- TypeScript will validate that only known `params`
						// are used in combination with a given `pathname`. Since the two will
						// always match for the current route, we can skip runtime checks.
						{
							pathname,
							params
						},
						{
							locale: nextLocale
						}
					);
				});
			};
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
				'jsxDEV'
			])(
				'div',
				{
					'aria-label': 'Language toggle',
					children: [
						/*#__PURE__*/ (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
							'jsxDEV'
						])(
							__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
								'default'
							],
							{
								label: 'English',
								ariaPressed:
									localActive ===
									__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$frame$2f$header$2f$language$2d$mode$2f$LanguageToggle$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
										'LanguageType'
									].ENGLISH,
								active: `${localActive === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$frame$2f$header$2f$language$2d$mode$2f$LanguageToggle$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__['LanguageType'].ENGLISH ? 'bg-107 rounded-r-2xl' : ''}`,
								buttonStyle: 'w-10 h-6 px-2',
								onClickHandler: () =>
									onLanguageChange(
										__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$frame$2f$header$2f$language$2d$mode$2f$LanguageToggle$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
											'LanguageType'
										].ENGLISH
									),
								variant:
									__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$button$2f$Button$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
										'ButtonVariantEnum'
									].OUTLINED_IN_LANGUAGE,
								children: 'EN'
							},
							void 0,
							false,
							{
								fileName: '[project]/src/components/frame/header/language-mode/LanguageToggle.tsx',
								lineNumber: 33,
								columnNumber: 4
							},
							('TURBOPACK compile-time value', void 0)
						),
						/*#__PURE__*/ (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
							'jsxDEV'
						])(
							__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
								'default'
							],
							{
								label: 'German',
								ariaPressed:
									localActive ===
									__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$frame$2f$header$2f$language$2d$mode$2f$LanguageToggle$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
										'LanguageType'
									].GERMAN,
								active: `${localActive === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$frame$2f$header$2f$language$2d$mode$2f$LanguageToggle$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__['LanguageType'].GERMAN ? 'bg-107 rounded-l-2xl' : ''}`,
								buttonStyle: 'w-10 h-6 px-2',
								onClickHandler: () =>
									onLanguageChange(
										__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$frame$2f$header$2f$language$2d$mode$2f$LanguageToggle$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
											'LanguageType'
										].GERMAN
									),
								variant:
									__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$button$2f$Button$2e$enum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
										'ButtonVariantEnum'
									].OUTLINED_IN_LANGUAGE,
								children: 'DE'
							},
							void 0,
							false,
							{
								fileName: '[project]/src/components/frame/header/language-mode/LanguageToggle.tsx',
								lineNumber: 42,
								columnNumber: 4
							},
							('TURBOPACK compile-time value', void 0)
						)
					]
				},
				void 0,
				true,
				{
					fileName: '[project]/src/components/frame/header/language-mode/LanguageToggle.tsx',
					lineNumber: 32,
					columnNumber: 3
				},
				('TURBOPACK compile-time value', void 0)
			);
		};
		_s(LanguageToggle, 'CYJI9CQRRgUK+iP3Bvts7P5zn6M=', false, function () {
			return [
				__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
					'useRouter'
				],
				__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
					'usePathname'
				],
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
					'useParams'
				],
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$intl$40$4$2e$13$2e$0_react$40$19$2e$2$2e$7$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
					'useLocale'
				]
			];
		});
		_c = LanguageToggle;
		const __TURBOPACK__default__export__ = LanguageToggle;
		var _c;
		__turbopack_context__.k.register(_c, 'LanguageToggle');
		if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
			__turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
		}
	},
	'[project]/src/components/frame/header/Header.tsx [app-client] (ecmascript)',
	(__turbopack_context__) => {
		'use strict';

		__turbopack_context__.s(['default', () => __TURBOPACK__default__export__]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				'[project]/node_modules/.pnpm/next@16.2.7_@babel+core@7.29.7_react-dom@19.2.7_react@19.2.7__react@19.2.7_sass@1.101.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)'
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$13$2e$0_next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19_65e6481121c1e4617a32da56c368f916$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				'[project]/node_modules/.pnpm/next-intl@4.13.0_next@16.2.7_@babel+core@7.29.7_react-dom@19.2.7_react@19.2.7__react@19_65e6481121c1e4617a32da56c368f916/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)'
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$frame$2f$header$2f$color$2d$mode$2f$ColorToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				'[project]/src/components/frame/header/color-mode/ColorToggle.tsx [app-client] (ecmascript)'
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$frame$2f$header$2f$header$2d$icon$2f$HeaderIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				'[project]/src/components/frame/header/header-icon/HeaderIcon.tsx [app-client] (ecmascript)'
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$frame$2f$header$2f$header$2d$icon$2f$HeaderIcon$2e$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				'[project]/src/components/frame/header/header-icon/HeaderIcon.list.tsx [app-client] (ecmascript)'
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$frame$2f$header$2f$HeaderLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i('[project]/src/components/frame/header/HeaderLink.tsx [app-client] (ecmascript)');
		var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$frame$2f$header$2f$language$2d$mode$2f$LanguageToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				'[project]/src/components/frame/header/language-mode/LanguageToggle.tsx [app-client] (ecmascript)'
			);
		var _s = __turbopack_context__.k.signature();
		('use client');
		const Header = () => {
			_s();
			const t = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$13$2e$0_next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19_65e6481121c1e4617a32da56c368f916$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
				'useTranslations'
			])('Navigation');
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
				'jsxDEV'
			])(
				'header',
				{
					children: /*#__PURE__*/ (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'jsxDEV'
					])(
						'nav',
						{
							className:
								'flex justify-between items-center mt-5 flex-col-reverse space-y-3 sm:space-y-0 sm:flex-row',
							children: [
								/*#__PURE__*/ (0,
								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
									'jsxDEV'
								])(
									'div',
									{
										className: 'flex gap-8 sm:w-72',
										children: [
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
												'jsxDEV'
											])(
												__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$frame$2f$header$2f$HeaderLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
													'default'
												],
												{
													href: '/',
													title: t('home')
												},
												void 0,
												false,
												{
													fileName: '[project]/src/components/frame/header/Header.tsx',
													lineNumber: 19,
													columnNumber: 6
												},
												('TURBOPACK compile-time value', void 0)
											),
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
												'jsxDEV'
											])(
												__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$frame$2f$header$2f$HeaderLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
													'default'
												],
												{
													href: '/portfolio',
													title: t('portfolio')
												},
												void 0,
												false,
												{
													fileName: '[project]/src/components/frame/header/Header.tsx',
													lineNumber: 20,
													columnNumber: 6
												},
												('TURBOPACK compile-time value', void 0)
											)
										]
									},
									void 0,
									true,
									{
										fileName: '[project]/src/components/frame/header/Header.tsx',
										lineNumber: 18,
										columnNumber: 5
									},
									('TURBOPACK compile-time value', void 0)
								),
								/*#__PURE__*/ (0,
								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
									'jsxDEV'
								])(
									'div',
									{
										children: /*#__PURE__*/ (0,
										__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
											'jsxDEV'
										])(
											'p',
											{
												className:
													'dark:text-108 w-40 font-semibold text-xl leading-8 text-center sm:text-start block sm:hidden md:block',
												children: 'Osami'
											},
											void 0,
											false,
											{
												fileName: '[project]/src/components/frame/header/Header.tsx',
												lineNumber: 24,
												columnNumber: 6
											},
											('TURBOPACK compile-time value', void 0)
										)
									},
									void 0,
									false,
									{
										fileName: '[project]/src/components/frame/header/Header.tsx',
										lineNumber: 23,
										columnNumber: 5
									},
									('TURBOPACK compile-time value', void 0)
								),
								/*#__PURE__*/ (0,
								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
									'jsxDEV'
								])(
									'div',
									{
										className: 'flex items-center gap-6',
										children: [
											__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$frame$2f$header$2f$header$2d$icon$2f$HeaderIcon$2e$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
												'HeaderIcons'
											]?.map((icon) => {
												return /*#__PURE__*/ (0,
												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
													'jsxDEV'
												])(
													__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$frame$2f$header$2f$header$2d$icon$2f$HeaderIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
														'default'
													],
													{
														icon: icon
													},
													icon.url,
													false,
													{
														fileName: '[project]/src/components/frame/header/Header.tsx',
														lineNumber: 31,
														columnNumber: 14
													},
													('TURBOPACK compile-time value', void 0)
												);
											}),
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
												'jsxDEV'
											])(
												'div',
												{
													className: 'h-6 w-6',
													children: /*#__PURE__*/ (0,
													__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
														'jsxDEV'
													])(
														__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$frame$2f$header$2f$color$2d$mode$2f$ColorToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
															'default'
														],
														{},
														void 0,
														false,
														{
															fileName: '[project]/src/components/frame/header/Header.tsx',
															lineNumber: 34,
															columnNumber: 7
														},
														('TURBOPACK compile-time value', void 0)
													)
												},
												void 0,
												false,
												{
													fileName: '[project]/src/components/frame/header/Header.tsx',
													lineNumber: 33,
													columnNumber: 6
												},
												('TURBOPACK compile-time value', void 0)
											),
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
												'jsxDEV'
											])(
												'div',
												{
													className: 'bg-105 dark:bg-106',
													children: /*#__PURE__*/ (0,
													__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7_sass$40$1$2e$101$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
														'jsxDEV'
													])(
														__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$frame$2f$header$2f$language$2d$mode$2f$LanguageToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
															'default'
														],
														{},
														void 0,
														false,
														{
															fileName: '[project]/src/components/frame/header/Header.tsx',
															lineNumber: 37,
															columnNumber: 7
														},
														('TURBOPACK compile-time value', void 0)
													)
												},
												void 0,
												false,
												{
													fileName: '[project]/src/components/frame/header/Header.tsx',
													lineNumber: 36,
													columnNumber: 6
												},
												('TURBOPACK compile-time value', void 0)
											)
										]
									},
									void 0,
									true,
									{
										fileName: '[project]/src/components/frame/header/Header.tsx',
										lineNumber: 29,
										columnNumber: 5
									},
									('TURBOPACK compile-time value', void 0)
								)
							]
						},
						void 0,
						true,
						{
							fileName: '[project]/src/components/frame/header/Header.tsx',
							lineNumber: 17,
							columnNumber: 4
						},
						('TURBOPACK compile-time value', void 0)
					)
				},
				void 0,
				false,
				{
					fileName: '[project]/src/components/frame/header/Header.tsx',
					lineNumber: 16,
					columnNumber: 3
				},
				('TURBOPACK compile-time value', void 0)
			);
		};
		_s(Header, 'h6+q2O3NJKPY5uL0BIJGLIanww8=', false, function () {
			return [
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$13$2e$0_next$40$16$2e$2$2e$7_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19_65e6481121c1e4617a32da56c368f916$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
					'useTranslations'
				]
			];
		});
		_c = Header;
		const __TURBOPACK__default__export__ = Header;
		var _c;
		__turbopack_context__.k.register(_c, 'Header');
		if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
			__turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
		}
	}
]);

//# sourceMappingURL=src_1a-b3ev._.js.map
