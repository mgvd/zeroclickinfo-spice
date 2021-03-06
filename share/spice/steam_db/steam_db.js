function ddg_spice_steam_db(api_result) {
	if(!api_result || !api_result.success) {
		return;
	}
	
	var query = DDG.get_query().replace(/(steam)/, '').trim();
	
	var script = $('[src*="/js/spice/steam_db/"]')[0],
	    source = $(script).attr('src'),
	    query = source.match(/steam_db\/([^\/]+)/)[1];
	
	Spice.render({
		data              : api_result.data,
		source_name       : "steamdb.info",
		source_url        : "http://steamdb.info/search/?a=app&type=1&q=" + query,
		spice_name        : 'steam_db',
		template_frame    : "list",
		header1           : decodeURIComponent(query) + " (SteamDB)",
		template_options  : {
			items: api_result.data,
			show: 5,
			template_item: 'steam_db'
		}
	});
};