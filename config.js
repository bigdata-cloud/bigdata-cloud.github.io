const config = {
    gatsby: {
        pathPrefix: '/',
        siteUrl: 'https://bigdata-cloud.github.io/',
        gaTrackingId: null,
        trailingSlash: false,
    },
    header: {

        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Central_European_University_Logo.svg/1280px-Central_European_University_Logo.svg.png',
        logoLink: 'https://ceu.edu/',
        title: "<a href='https://datapao.com/'><img class='img-responsive' src='https://datapao.com/wp-content/themes/datapao/img/footer.svg'/></a>",
        githubUrl: 'https://github.com/zoltanctoth/ceu-cloud-bigdata-course',
        helpUrl: '',
        tweetText: 'Big Data and Cloud Computing Courseware, https://github.com/zoltanctoth/ceu-cloud-bigdata-course',
        social: `<li>
		    <a href="https://twitter.com/DE2course" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://ceu-bizanalytics.slack.com/#/" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://cdn-5dc591f7f911c91c58a5564e.closte.com/wp-content/uploads/2020/03/slack-icon.png' alt={'Slack'}/>
		      </div>
		    </a>
		  </li>`,
        links: [{ text: '', link: '' }],
        search: {
            enabled: false,
            indexName: 'prod_DE2',
            algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
            algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
            algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
        },
    },
    sidebar: {
        forcedNavOrder: [
            '/syllabus',
            '/internet', // add trailing slash if enabled above
            '/aws',
            '/serverless',
            '/apachespark',
            '/sparkinternals',
            '/sparkAPI',
            '/spark-continued',
            '/bigdatahistory',
            '/resources',
        ],
        collapsedNav: [
            '/internet', // add trailing slash if enabled above
            '/aws',
            '/serverless',
            '/apachespark',
            '/sparkinternals',
            '/sparkAPI',
            '/spark-continued',

        ],
        links: [{ text: '<- Go Back', link: 'http://localhost:8000/' }],
        frontline: false,
        ignoreIndex: true,
        title: "<a href='#'>CEU </a><div class='greenCircle'></div><a href='#'>Courseware</a>",
    },
    siteMetadata: {
        title: 'Data Engineering at Central European University',
        description: 'Big Data and Cloud Computing course delivered at Central European University',
        ogImage: null,
        docsLocation: 'https://github.com/zoltanctoth/ceu-cloud-bigdata-course/tree/master',
        favicon: 'https://media.glassdoor.com/sqll/591152/central-european-university-squarelogo-1430146462267.png',
    },
    pwa: {
        enabled: false, // disabling this will also remove the existing service worker.
        manifest: {
            name: 'CEU Data Engineering II',
            short_name: 'DE2',
            start_url: '/',
            background_color: '#6b37bf',
            theme_color: '#6b37bf',
            display: 'standalone',
            crossOrigin: 'use-credentials',
            icons: [{
                src: 'src/pwa-512.png',
                sizes: `512x512`,
                type: `image/png`,
            }, ],
        },
    },
};

module.exports = config;