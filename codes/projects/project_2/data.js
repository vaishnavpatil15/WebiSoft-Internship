const http = require('https');

const options = {
	method: 'POST',
	hostname: 'jobs-search-api.p.rapidapi.com',
	port: null,
	path: '/getjobs',
	headers: {
		'x-rapidapi-key': '343a71e7bdmsh2ca9b9cc91ec8d1p1bd59ejsnb084c446faca',
		'x-rapidapi-host': 'jobs-search-api.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.write(JSON.stringify({
  search_term: 'web',
  location: 'pune',
  results_wanted: 5,
  site_name: [
    'indeed',
    'linkedin',
    'zip_recruiter',
    'glassdoor'
  ],
  distance: 50,
  job_type: 'fulltime',
  is_remote: false,
  linkedin_fetch_description: false,
  hours_old: 72
}));
req.end();