if (__kernel_settings__['use'] !== true) {
	throw new Error('!__kernel__');
}

class Kernel {
	constructor (components_logic_path, components_settings_path, interface_logic_path, interface_path, programs_path, librarys_path, backend_path, text_path, images_path, fonts_path) {
		this.components_logic_path = components_logic_path;
		this.components_settings_path = components_settings_path;
		this.interface_logic_path = interface_logic_path;
		this.interface_path = interface_path;
		this.programs_path = programs_path;
		this.librarys_path = librarys_path;
		this.backend_path = backend_path;
		this.text_path = text_path;
		this.images_path = images_path;
		this.fonts_path = fonts_path;
	}
	run () {
		let syntax = document.createElement('script');
		syntax.src = this.components_logic_path + 'syntax.js';
		syntax.onload = () => {
			element('script', {
				'src': this.components_settings_path + 'includer.js',
				'onload': () => {
					element('script', {
						'src': this.components_logic_path + 'includer.js',
						'onload': () => {
							__includer__.list(this.components_settings_path, '.js',
								() => {},
								() => {
									__includer__.list(this.components_logic_path, '.js',
										() => {},
										() => {
											__includer__.list(this.text_path + __localization__.lang + '/', '.js',
												() => {},
												() => {
													__includer__.list(this.interface_logic_path, '.js',
														() => {},
														() => {
															__includer__.list(this.interface_path + __adaptivity__.device + '/', '.js',
																() => {},
																() => {
																	// __preloader__.set();
																	// __log__.set();
																	document.querySelector('#area').remove();
																	document.querySelector('#prepreloader').remove();
																	__includer__.list(this.components_settings_path, '.js',
																		() => {},
																		() => {
																			__includer__.list(this.components_logic_path, '.js',
																				() => {},
																				() => {
																					__includer__.list(this.interface_logic_path, '.js',
																						() => {},
																						() => {
																							__includer__.list(this.interface_path + __adaptivity__.device + '/', '.js',
																								() => {},
																								() => {
																									// __history__.log = __phrases__['open_sj'];
																									// __desktop__.set();
																									// __side_bar__.set();
																									// __top_bar__.set();
																									// __editor__.delete_preloader();
																									// __editor__.delete_log();
																								},
																								['desktop', 'desktop_icon', 'side_bar', 'side_bar_icon', 'top_bar', 'top_bar_menu', 'window', 'window_area', 'window_top_bar', 'window_resize', 'in_window_area', 'push', 'error', 'context_menu']
																							);
																						},
																						['desktop', 'desktop_icon', 'side_bar', 'side_bar_icon', 'top_bar', 'top_bar_menu', 'window', 'window_area', 'window_top_bar', 'window_resize', 'in_window_area', 'push', 'error', 'context_menu']
																					);
																				},
																				['history', 'filesystem', 'editor', 'templates', 'bug']
																			);
																		},
																		['history', 'filesystem', 'editor', 'templates', 'bug']
																	);
																},
																['preload', 'log']
															);
														},
														['preload', 'log']
													);
												},
												['text']
											);
										},
										['error', 'time', 'localization', 'adaptivity']
									);
								},
								['librarys', 'components', 'resources', 'programs', 'error', 'time', 'localization', 'adaptivity']
							);
						}
					}, 'head');
				}
			}, 'head');
			
		};
		document.head.appendChild(syntax);
	}
}

globalThis.__kernel__ = new Kernel (
	__kernel_settings__['components_logic_path'],
	__kernel_settings__['components_settings_path'],
	__kernel_settings__['interface_logic_path'],
	__kernel_settings__['interface_path'],
	__kernel_settings__['programs_path'],
	__kernel_settings__['librarys_path'],
	__kernel_settings__['backend_path'],
	__kernel_settings__['text_path'],
	__kernel_settings__['images_path'],
	__kernel_settings__['fonts_path']
);