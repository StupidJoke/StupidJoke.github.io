if (__kernel_settings__['use'] !== true) {
	throw new Error('!__kernel__');
}

class Kernel {
	constructor () {

	}
	run () {
		let syntax = document.createElement('script');
		syntax.src = __kernel_settings__['init_components_path'] + 'syntax.js';
		syntax.onload = () => {
			element('script', {
				'src': __kernel_settings__['init_settings_path'] + 'includer.js'
			}, 'head');
			element('script', {
				'src': __kernel_settings__['init_components_path'] + 'includer.js',
				'onload': () => {
					__includer__.list(__kernel_settings__['init_settings_path'], '.js',
						() => {},
						() => {
							__includer__.list(__kernel_settings__['init_components_path'], '.js',
								() => {},
								() => {
									__metrika__.query('http://httpbin.org/post', '123');
									__includer__.list(__kernel_settings__['init_interface_settings_path'], '.js',
										() => {},
										() => {
											__includer__.list(__kernel_settings__['init_interface_path'] + __adaptivity__.device + '/', '.js',
												() => {},
												() => {
													__includer__.list(__kernel_settings__['init_settings_path'], '.js',
														() => {},
														() => {
															__includer__.list(__kernel_settings__['init_components_path'], '.js',
																() => {},
																() => {
																	__includer__.list(__kernel_settings__['init_interface_settings_path'], '.js',
																		() => {},
																		() => {
																			__includer__.list(__kernel_settings__['init_interface_path'] + __adaptivity__.device + '/', '.js',
																				() => {},
																				() => {
																					// finish
																				},
																				['desktop', 'desktop_icon', 'side_bar', 'side_bar_icon', 'top_bar', 'top_bar_menu', 'window', 'window_area', 'window_top_bar', 'window_resize', 'in_window_area', 'push', 'error', 'context_menu']
																			);
																		},
																		['desktop', 'desktop_icon', 'side_bar', 'side_bar_icon', 'top_bar', 'top_bar_menu', 'window', 'window_area', 'window_top_bar', 'window_resize', 'in_window_area', 'push', 'error', 'context_menu']
																	);
																},
																['history', 'localization', 'filesystem', 'editor', 'templates', 'bug']
															);
														},
														['history', 'localization', 'filesystem', 'editor', 'templates', 'bug']
													);
												},
												['preload', 'log']
											);
										},
										['preload', 'log']
									);
								},
								['error', 'time', 'metrika', 'adaptivity']
							);
						},
						['librarys', 'components', 'resources', 'programs', 'error', 'time', 'metrika', 'adaptivity']
					);
				}
			}, 'head');
		};
		document.head.appendChild(syntax);
	}
}

globalThis.__kernel__ = new Kernel ();