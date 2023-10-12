import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
   <!DOCTYPE html>
<html>
<head>
  <title>Download Our App</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
</head>
<body>
    
  <div class="container">
    <h1>Welcome to install our app!</h1>
    <h2>  
    </h2>
    <p>Please press the button below to download the app.</p>
    <h3>   
    </h3>
    <a href="..\dawnload_app\J-NovelClub.apk" download="app.apk">Download</a>
  </div>
</body>
</html>

  )
}
