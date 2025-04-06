
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
<xsl:template match="/">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title><xsl:value-of select="/rss/channel/title"/> | RSS Feed</title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
  <style type="text/css">
    /* CRT and cyber theme styling */
    @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&amp;display=swap');
    
    :root {
      --background-color: #121212;
      --text-color: #E0E0E0;
      --hacker-green: #4A7A5B;
      --hacker-green-glow: 0 0 10px rgba(74, 122, 91, 0.8);
      --link-color: #4A7A5B;
      --link-hover-color: #E0E0E0;
      --border-color: #333333;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      background-color: var(--background-color);
      color: var(--text-color);
      font-family: 'Space Mono', monospace;
      line-height: 1.6;
      padding: 2rem;
      position: relative;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    /* Background effects */
    body::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle, rgba(25, 25, 25, 0.7) 0%, rgba(10, 10, 10, 0.85) 100%),
        repeating-linear-gradient(
          transparent 0px,
          rgba(74, 122, 91, 0.03) 1px,
          transparent 2px
        );
      background-size: 100% 100%, 100% 4px;
      z-index: -2;
      pointer-events: none;
    }
    
    /* CRT scanline effect */
    body::after {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        to bottom,
        transparent 50%,
        rgba(0, 0, 0, 0.07) 50%
      );
      background-size: 100% 4px;
      pointer-events: none;
      z-index: 10;
      opacity: 0.3;
    }
    
    .feed-container {
      border: 1px solid var(--border-color);
      padding: 2rem;
      margin-bottom: 2rem;
      position: relative;
      overflow: hidden;
      background-color: rgba(28, 28, 28, 0.6);
    }
    
    .feed-container::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(
        circle at center,
        transparent 70%,
        rgba(0, 0, 0, 0.3) 100%
      );
      pointer-events: none;
      z-index: 1;
    }
    
    .header {
      margin-bottom: 2rem;
      text-align: center;
      position: relative;
      z-index: 2;
    }
    
    .feed-title {
      font-size: 2.5rem;
      font-weight: bold;
      color: var(--hacker-green);
      text-shadow: var(--hacker-green-glow);
      margin-bottom: 0.5rem;
    }
    
    .feed-description {
      font-size: 1rem;
      margin-bottom: 1rem;
      opacity: 0.8;
    }
    
    .feed-link {
      display: inline-block;
      color: var(--link-color);
      text-decoration: none;
      border-bottom: 1px solid var(--link-color);
      transition: all 0.3s ease;
      margin-bottom: 1rem;
    }
    
    .feed-link:hover {
      color: var(--link-hover-color);
      border-color: var(--link-hover-color);
      text-shadow: var(--hacker-green-glow);
    }
    
    .post-list {
      position: relative;
      z-index: 2;
    }
    
    .post {
      border: 1px solid var(--border-color);
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      transition: all 0.3s ease;
      background-color: rgba(28, 28, 28, 0.7);
      position: relative;
    }
    
    .post:hover {
      border-color: var(--hacker-green);
      box-shadow: 0 0 15px rgba(74, 122, 91, 0.3);
      transform: translateY(-2px);
    }
    
    .post::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 4px;
      background-color: var(--hacker-green);
      opacity: 0.5;
      transition: opacity 0.3s ease;
    }
    
    .post:hover::before {
      opacity: 1;
    }
    
    .post-title {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
      color: var(--hacker-green);
      text-shadow: var(--hacker-green-glow);
    }
    
    .post-title-link {
      color: var(--hacker-green);
      text-decoration: none;
      transition: color 0.3s ease;
    }
    
    .post-title-link:hover {
      color: var(--link-hover-color);
      text-decoration: none;
    }
    
    .post-date {
      font-size: 0.8rem;
      color: #AAAAAA;
      margin-bottom: 1rem;
      display: block;
    }
    
    .post-description {
      margin-bottom: 1rem;
      line-height: 1.5;
    }
    
    .post-link {
      display: inline-block;
      color: var(--hacker-green);
      text-decoration: none;
      font-size: 0.9rem;
      transition: all 0.3s ease;
      border: 1px solid var(--hacker-green);
      padding: 0.5rem 1rem;
    }
    
    .post-link:hover {
      background-color: rgba(74, 122, 91, 0.1);
      text-shadow: var(--hacker-green-glow);
    }
    
    .post-categories {
      margin-top: 1rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    
    .post-category {
      font-size: 0.8rem;
      padding: 0.25rem 0.5rem;
      background-color: rgba(74, 122, 91, 0.1);
      border: 1px solid rgba(74, 122, 91, 0.3);
      color: var(--hacker-green);
      border-radius: 2px;
    }
    
    .footer {
      text-align: center;
      margin-top: 2rem;
      font-size: 0.9rem;
      color: #AAAAAA;
      position: relative;
      z-index: 2;
    }
    
    @media (max-width: 768px) {
      body {
        padding: 1rem;
      }
      
      .feed-container {
        padding: 1rem;
      }
      
      .feed-title {
        font-size: 1.8rem;
      }
      
      .post {
        padding: 1rem;
      }
      
      .post-title {
        font-size: 1.2rem;
      }
    }
  </style>
</head>
<body>
  <div class="feed-container">
    <div class="header">
      <h1 class="feed-title"><xsl:value-of select="/rss/channel/title"/></h1>
      <p class="feed-description"><xsl:value-of select="/rss/channel/description"/></p>
      <a class="feed-link" href="{/rss/channel/link}">Visit Website</a>
    </div>
    
    <div class="post-list">
      <xsl:for-each select="/rss/channel/item">
        <div class="post">
          <h2 class="post-title">
            <a class="post-title-link" href="{link}">
              <xsl:value-of select="title"/>
            </a>
          </h2>
          <span class="post-date"><xsl:value-of select="pubDate"/></span>
          <p class="post-description"><xsl:value-of select="description"/></p>
          
          <div class="post-categories">
            <xsl:for-each select="category">
              <span class="post-category"><xsl:value-of select="."/></span>
            </xsl:for-each>
          </div>
          
          <a class="post-link" href="{link}">Read More</a>
        </div>
      </xsl:for-each>
    </div>
  </div>
  
  <div class="footer">
    <p>© 2025 N1ghtw1re Studios | RSS Feed</p>
  </div>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
