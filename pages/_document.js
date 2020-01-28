import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charset="utf-8" />
					<meta http-equiv="X-UA-Compatible" content="IE=edge" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, shrink-to-fit=no"
					/>
					<link
						rel="icon"
						type="image/png"
						href={require("../images/favicon.png")}
					></link>
					<meta name="author" content="Jio Buenviaje" />

					{/* Set the page title */}
					<title>Tembo AI</title>
					<meta property="og:title" content="Tembo AI" />
					<meta property="twitter:title" content="Tembo AI" />

					{/* Open graph tags and twitter tags */}
					<meta property="og:type" content="website" />
					<meta property="og:site_name" content="Tembo AI" />
					<meta property="og:url" content="tembo.ai" />
					<meta property="twitter:url" content="tembo.ai" />
					<meta name="theme-color" content="#3e0f5e" />

					{/* Set the page description */}
					<meta
						name="description"
						content="Tembo AI - Empowering individuals to protect their communities."
					/>
					<meta
						property="og:description"
						content="Tembo AI - Empowering individuals to protect their communities."
					/>
					<meta
						property="twitter:description"
						content="Tembo AI - Empowering individuals to protect their communities."
					/>

					{/* Set the page keywords */}
					<meta
						name="keywords"
						content="tembo,ai,temboai,anand,shah,anandshah,anandkiranshah,jio,juansergiobuenviaje,juansergio,juanbuenviaje,sergiobuenviaje,dan,kervick,dankervick,notredame,nd,techentrepreneurship,tech,entrepreneurship,esteem,msesteem,materials,science,materialscience,ideacenter,idea,center,ndideacenter,ndidea,mccloskey,mccloskeywinner,mccloskeynewventure,mccloskeyventure,venturecompetition,mccloskeyventurecompetition,mcclockeynewventurecompetition,farshore,farshorepartnershipdriven,farshorepartnership,farshorepartner,harborlink,harborlinknetwork,harborlinknetworkpartnership,harborlinknetworkparter,harborlinkpartnership,harborlinkpartner,northwestern,nw,chicago,illinois,il,chitown,garage,thegarage,ml,machinelearning,machine,learning,artificialintelligence,artificial,intelligence,stoneman,stonemandouglas,stonemandouglashighschool,stonemanhighschool,douglas,douglashighschool,london,londonbridge,londonbridgeterror,londonterror,londonbridgeterrorattacks,londonterrorattacks,mobile,iosdevelopment,ios,android,androiddevelopment,website,southbend,indiana,in,university,react,javascript,node,developer,dev,flutter,dart,embedded,raspberrypi,rpi,raspi,jointheherd,theherd,herd,joinherd,contact"
					/>

					{/* Set the page image if there is one */}
					<meta property="og:image" content="../images/bg2.png" />
					<meta
						property="twitter:image"
						content="../images/bg2.png"
					/>
					<meta name="twitter:card" content="summary_large_image" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
