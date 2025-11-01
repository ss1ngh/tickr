export const WELCOME_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <meta name="x-apple-disable-message-reformatting">
    <title>Welcome to tickr</title>
    <style type="text/css">
        /* Responsive Styles */
        @media only screen and (max-width: 600px) {
            .email-container {
                width: 100% !important;
                margin: 0 !important;
                border-radius: 0 !important;
            }
            .mobile-padding {
                padding: 24px !important;
            }
            .mobile-header-padding {
                padding: 24px 24px 12px 24px !important;
            }
            .mobile-text {
                font-size: 14px !important;
                line-height: 1.5 !important;
            }
            .mobile-title {
                font-size: 24px !important;
                line-height: 1.3 !important;
            }
            .mobile-button a {
                width: calc(100% - 64px) !important;
                display: block !important;
                text-align: center !important;
            }
            .mobile-outer-padding {
                padding: 0 !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #000000; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #000000;">
        <tr>
            <td align="center" class="mobile-outer-padding" style="padding: 40px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="email-container" style="max-width: 600px; background-color: #111111; border-radius: 8px; border: 1px solid #272727;">
                    
                    <tr>
                        <td align="left" class="mobile-header-padding" style="padding: 40px 40px 20px 40px;">
                            <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #C8FF00; letter-spacing: -1px;">
                                tickr
                            </h1>
                        </td>
                    </tr>
                    
                    <tr>
                        <td class="mobile-padding" style="padding: 20px 40px 40px 40px;">
                            
                            <h2 class="mobile-title" style="margin: 0 0 24px 0; font-size: 28px; font-weight: 600; color: #C8FF00; line-height: 1.2;">
                                Welcome aboard, {{name}}
                            </h2>
                            
                            <p class="mobile-text" style="margin: 0 0 24px 0; font-size: 16px; line-height: 1.6; color: #F5F5F5;">
                                You're all set to start tracking the market. We're excited to help you find your next opportunity.
                            </p>
                            
                            <p class="mobile-text" style="margin: 0 0 15px 0; font-size: 16px; line-height: 1.6; color: #F5F5F5; font-weight: 600;">
                                Here's what you can do right now:
                            </p>
                            
                            <ul class="mobile-text" style="margin: 0 0 30px 0; padding-left: 20px; font-size: 16px; line-height: 1.6; color: #F5F5F5;">
                                <li style="margin-bottom: 12px;">Build your watchlist to follow your favorite stocks.</li>
                                <li style="margin-bottom: 12px;">Create price and volume alerts so you never miss a move.</li>
                                <li style="margin-bottom: 12px;">Explore the dashboard for trends and market news.</li>
                            </ul>
                            
                            <p class="mobile-text" style="margin: 0 0 40px 0; font-size: 16px; line-height: 1.6; color: #F5F5F5;">
                                We'll keep you informed with timely updates and insights. Focus on making the right calls—we'll handle the noise.
                            </p>
                            
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0 0 40px 0; width: 100%;">
                                <tr>
                                    <td align="left" class="mobile-button">
                                        <a href="https://stock-market-dev.vercel.app/" style="display: inline-block; background: #C8FF00; color: #000000; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-size: 16px; font-weight: 700; line-height: 1; text-align: center;">
                                            Go to Your Dashboard
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            
                            <p class="mobile-text" style="margin: 40px 0 0 0; font-size: 14px; line-height: 1.5; color: #9E9E9E; text-align: left;">
                                tickr HQ, 200 Market Street, San Francisco, CA 94105<br>
                                <a href="#" style="color: #9E9E9E; text-decoration: underline;">Unsubscribe</a> | 
                                <a href="https://stock-market-dev.vercel.app/" style="color: #9E9E9E; text-decoration: underline;">Visit tickr</a><br>
                                © 2025 tickr
                            </p>
                        </td>
                    </tr>
                    
                </table>
                </td>
        </tr>
    </table>
</body>
</html>`;

export const NEWS_SUMMARY_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <meta name="x-apple-disable-message-reformatting">
    <title>Market News Summary</title>
    <style type="text/css">
        /* Responsive Styles */
        @media only screen and (max-width: 600px) {
            .email-container {
                width: 100% !important;
                margin: 0 !important;
                border-radius: 0 !important;
            }
            .mobile-padding {
                padding: 24px !important;
            }
            .mobile-header-padding {
                padding: 24px 24px 12px 24px !important;
            }
            .mobile-text {
                font-size: 14px !important;
                line-height: 1.5 !important;
            }
            .mobile-title {
                font-size: 24px !important;
                line-height: 1.3 !important;
            }
            .mobile-outer-padding {
                padding: 0 !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #000000; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #000000;">
        <tr>
            <td align="center" class="mobile-outer-padding" style="padding: 40px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="email-container" style="max-width: 600px; background-color: #111111; border-radius: 8px; border: 1px solid #272727;">
                    
                    <tr>
                        <td align="left" class="mobile-header-padding" style="padding: 40px 40px 20px 40px;">
                            <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #C8FF00; letter-spacing: -1px;">
                                tickr
                            </h1>
                        </td>
                    </tr>
                    
                    <tr>
                        <td class="mobile-padding" style="padding: 20px 40px 40px 40px;">
                            
                            <h2 class="mobile-title" style="margin: 0 0 10px 0; font-size: 28px; font-weight: 600; color: #C8FF00; line-height: 1.2;">
                                Your Market News Summary
                            </h2>
                            
                            <p class="mobile-text" style="margin: 0 0 30px 0; font-size: 14px; line-height: 1.4; color: #9E9E9E;">
                                {{date}}
                            </p>
                            
                            <div class="mobile-text" style="font-size: 16px; line-height: 1.6; color: #F5F5F5;">
                                {{newsContent}}
                            </div>
                            
                            <div style="text-align: left; margin: 40px 0 0 0; border-top: 1px solid #272727; padding-top: 30px;">
                                <p style="margin: 0 0 10px 0; font-size: 14px; line-height: 1.5; color: #9E9E9E;">
                                    You're receiving this because you subscribed to tickr news updates.
                                </p>
                                <p style="margin: 0 0 10px 0; font-size: 14px; line-height: 1.5; color: #9E9E9E;">
                                    <a href="#" style="color: #9E9E9E; text-decoration: underline;">Unsubscribe</a> | 
                                    <a href="https://stock-market-dev.vercel.app/" style="color: #9E9E9E; text-decoration: underline;">Visit tickr</a>
                                </p>
                                <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #9E9E9E;">
                                    © 2025 tickr
                                </p>
                            </div>
                        </td>
                    </tr>
                    
                </table>
                </td>
        </tr>
    </table>
</body>
</html>`;

export const STOCK_ALERT_UPPER_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <meta name="x-apple-disable-message-reformatting">
    <title>Price Alert: {{symbol}}</title>
    <style type="text/css">
        @media only screen and (max-width: 600px) {
            .email-container { width: 100% !important; margin: 0 !important; border-radius: 0 !important; }
            .mobile-padding { padding: 24px !important; }
            .mobile-header-padding { padding: 24px 24px 12px 24px !important; }
            .mobile-text { font-size: 14px !important; line-height: 1.5 !important; }
            .mobile-title { font-size: 24px !important; line-height: 1.3 !important; }
            .mobile-button a { width: calc(100% - 64px) !important; display: block !important; text-align: center !important; }
            .mobile-outer-padding { padding: 0 !important; }
            .mobile-price { font-size: 28px !important; }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #000000; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #000000;">
        <tr>
            <td align="center" class="mobile-outer-padding" style="padding: 40px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="email-container" style="max-width: 600px; background-color: #111111; border-radius: 8px; border: 1px solid #272727;">
                    
                    <tr>
                        <td align="left" class="mobile-header-padding" style="padding: 40px 40px 20px 40px;">
                            <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #C8FF00; letter-spacing: -1px;">
                                tickr
                            </h1>
                        </td>
                    </tr>
                    
                    <tr>
                        <td class="mobile-padding" style="padding: 20px 40px 40px 40px;">
                            
                            <h2 class="mobile-title" style="margin: 0 0 10px 0; font-size: 28px; font-weight: 600; color: #C8FF00; line-height: 1.2;">
                                📈 Price Above Reached
                            </h2>
                            <p class="mobile-text" style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.4; color: #9E9E9E;">
                                {{timestamp}}
                            </p>

                            <div style="text-align: center; padding: 30px 20px; background-color: #000000; border-radius: 8px; margin-bottom: 30px; border: 1px solid #272727;">
                                <h3 style="margin: 0 0 10px 0; font-size: 28px; font-weight: 700; color: #F5F5F5;">
                                    {{symbol}}
                                </h3>
                                <p style="margin: 0 0 20px 0; font-size: 16px; color: #9E9E9E;">
                                    {{company}}
                                </p>
                                
                                <p style="margin: 0 0 5px 0; font-size: 14px; color: #9E9E9E; text-transform: uppercase; letter-spacing: 0.5px;">
                                    Current Price
                                </p>
                                <p class="mobile-price" style="margin: 0; font-size: 36px; font-weight: 700; color: #C8FF00;">
                                    {{currentPrice}}
                                </p>
                            </div>
                            
                            <div style="background-color: #1A1A1A; border-radius: 8px; padding: 24px; margin-bottom: 30px; border: 1px solid #272727;">
                                <h3 style="margin: 0 0 15px 0; font-size: 18px; font-weight: 600; color: #F5F5F5;">
                                    Alert Details
                                </h3>
                                <p class="mobile-text" style="margin: 0 0 10px 0; font-size: 16px; line-height: 1.5; color: #9E9E9E;">
                                    <strong>Target Price:</strong> {{targetPrice}}
                                </p>
                                <p class="mobile-text" style="margin: 0; font-size: 16px; line-height: 1.5; color: #9E9E9E;">
                                    <strong>Trigger:</strong> Price exceeded your upper threshold.
                                </p>
                            </div>
                            
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 30px;">
                                <tr>
                                    <td align="left" class="mobile-button">
                                        <a href="https://stock-market-dev.vercel.app/" style="display: inline-block; background: #C8FF00; color: #000000; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-size: 16px; font-weight: 700; line-height: 1; text-align: center;">
                                            View Dashboard
                                        </a>
                                    </td>
                                </tr>

                             <div style="text-align: left; margin: 40px 0 0 0; border-top: 1px solid #272727; padding-top: 30px;">
                                <p style="margin: 0 0 10px 0; font-size: 14px; line-height: 1.5; color: #9E9E9E;">
                                    You're receiving this because you set a price alert on tickr.
                                </p>
                                <p style="margin: 0 0 10px 0; font-size: 14px; line-height: 1.5; color: #9E9E9E;">
                                    <a href="#" style="color: #9E9E9E; text-decoration: underline;">Manage Alerts</a> | 
                                    <a href="https://stock-market-dev.vercel.app/" style="color: #9E9E9E; text-decoration: underline;">Visit tickr</a>
                                </p>
                                <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #9E9E9E;">
                                    © 2025 tickr
                                </p>
                            </div>
                        </td>
                    </tr>
                    
                </table>
                </td>
        </tr>
    </table>
</body>
</html>`;

export const STOCK_ALERT_LOWER_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <meta name="x-apple-disable-message-reformatting">
    <title>Price Alert: {{symbol}}</title>
    <style type="text/css">
        @media only screen and (max-width: 600px) {
            .email-container { width: 100% !important; margin: 0 !important; border-radius: 0 !important; }
            .mobile-padding { padding: 24px !important; }
            .mobile-header-padding { padding: 24px 24px 12px 24px !important; }
            .mobile-text { font-size: 14px !important; line-height: 1.5 !important; }
            .mobile-title { font-size: 24px !important; line-height: 1.3 !important; }
            .mobile-button a { width: calc(100% - 64px) !important; display: block !important; text-align: center !important; }
            .mobile-outer-padding { padding: 0 !important; }
            .mobile-price { font-size: 28px !important; }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #000000; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #000000;">
        <tr>
            <td align="center" class="mobile-outer-padding" style="padding: 40px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="email-container" style="max-width: 600px; background-color: #111111; border-radius: 8px; border: 1px solid #272727;">
                    
                    <tr>
                        <td align="left" class="mobile-header-padding" style="padding: 40px 40px 20px 40px;">
                            <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #C8FF00; letter-spacing: -1px;">
                                tickr
                            </h1>
                        </td>
                    </tr>
                    
                    <tr>
                        <td class="mobile-padding" style="padding: 20px 40px 40px 40px;">
                            
                            <h2 class="mobile-title" style="margin: 0 0 10px 0; font-size: 28px; font-weight: 600; color: #F43F5E; line-height: 1.2;">
                                📉 Price Below Hit
                            </h2>
                            <p class="mobile-text" style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.4; color: #9E9E9E;">
                                {{timestamp}}
                            </p>

                            <div style="text-align: center; padding: 30px 20px; background-color: #000000; border-radius: 8px; margin-bottom: 30px; border: 1px solid #272727;">
                                <h3 style="margin: 0 0 10px 0; font-size: 28px; font-weight: 700; color: #F5F5F5;">
                                    {{symbol}}
                                </h3>
                                <p style="margin: 0 0 20px 0; font-size: 16px; color: #9E9E9E;">
                                    {{company}}
                                </p>
                                
                                <p style="margin: 0 0 5px 0; font-size: 14px; color: #9E9E9E; text-transform: uppercase; letter-spacing: 0.5px;">
                                    Current Price
                                </p>
                                <p class="mobile-price" style="margin: 0; font-size: 36px; font-weight: 700; color: #F43F5E;">
                                    {{currentPrice}}
                                </p>
                            </div>
                            
                            <div style="background-color: #1A1A1A; border-radius: 8px; padding: 24px; margin-bottom: 30px; border: 1px solid #272727;">
                                <h3 style="margin: 0 0 15px 0; font-size: 18px; font-weight: 600; color: #F5F5F5;">
                                    Alert Details
                                </h3>
                                <p class="mobile-text" style="margin: 0 0 10px 0; font-size: 16px; line-height: 1.5; color: #9E9E9E;">
                                    <strong>Target Price:</strong> {{targetPrice}}
                                </p>
                                <p class="mobile-text" style="margin: 0; font-size: 16px; line-height: 1.5; color: #9E9E9E;">
                                    <strong>Trigger:</strong> Price dropped below your lower threshold.
                                </p>
                            </div>
                            
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 30px;">
                                <tr>
                                    <td align="left" class="mobile-button">
                                        <a href="https://stock-market-dev.vercel.app/" style="display: inline-block; background: #C8FF00; color: #000000; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-size: 16px; font-weight: 700; line-height: 1; text-align: center;">
                                            View Dashboard
                                        </a>
                                    </td>
                                </tr>

                             <div style="text-align: left; margin: 40px 0 0 0; border-top: 1px solid #272727; padding-top: 30px;">
                                <p style="margin: 0 0 10px 0; font-size: 14px; line-height: 1.5; color: #9E9E9E;">
                                    You're receiving this because you set a price alert on tickr.
                                </p>
                                <p style="margin: 0 0 10px 0; font-size: 14px; line-height: 1.5; color: #9E9E9E;">
                                    <a href="#" style="color: #9E9E9E; text-decoration: underline;">Manage Alerts</a> | 
                                    <a href="https://stock-market-dev.vercel.app/" style="color: #9E9E9E; text-decoration: underline;">Visit tickr</a>
                                </p>
                                <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #9E9E9E;">
                                    © 2025 tickr
                                </p>
                            </div>
                        </td>
                    </tr>
                    
                </table>
                </td>
        </tr>
    </table>
</body>
</html>`;

export const VOLUME_ALERT_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <meta name="x-apple-disable-message-reformatting">
    <title>Volume Alert: {{symbol}}</title>
    <style type="text/css">
        @media only screen and (max-width: 600px) {
            .email-container { width: 100% !important; margin: 0 !important; border-radius: 0 !important; }
            .mobile-padding { padding: 24px !important; }
            .mobile-header-padding { padding: 24px 24px 12px 24px !important; }
            .mobile-text { font-size: 14px !important; line-height: 1.5 !important; }
            .mobile-title { font-size: 24px !important; line-height: 1.3 !important; }
            .mobile-button a { width: calc(100% - 64px) !important; display: block !important; text-align: center !important; }
            .mobile-outer-padding { padding: 0 !important; }
            .mobile-volume { font-size: 28px !important; }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #000000; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #000000;">
        <tr>
            <td align="center" class="mobile-outer-padding" style="padding: 40px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="email-container" style="max-width: 600px; background-color: #111111; border-radius: 8px; border: 1px solid #272727;">
                    
                    <tr>
                        <td align="left" class="mobile-header-padding" style="padding: 40px 40px 20px 40px;">
                            <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #C8FF00; letter-spacing: -1px;">
                                tickr
                            </h1>
                        </td>
                    </tr>
                    
                    <tr>
                        <td class="mobile-padding" style="padding: 20px 40px 40px 40px;">
                            
                            <h2 class="mobile-title" style="margin: 0 0 10px 0; font-size: 28px; font-weight: 600; color: #C8FF00; line-height: 1.2;">
                                📊 Volume Alert
                            </h2>
                            <p class="mobile-text" style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.4; color: #9E9E9E;">
                                {{timestamp}}
                            </p>

                            <div style="text-align: center; padding: 30px 20px; background-color: #000000; border-radius: 8px; margin-bottom: 30px; border: 1px solid #272727;">
                                <h3 style="margin: 0 0 10px 0; font-size: 28px; font-weight: 700; color: #F5F5F5;">
                                    {{symbol}}
                                </h3>
                                <p style="margin: 0 0 20px 0; font-size: 16px; color: #9E9E9E;">
                                    {{company}}
                                </p>
                                
                                <p style="margin: 0 0 5px 0; font-size: 14px; color: #9E9E9E; text-transform: uppercase; letter-spacing: 0.5px;">
                                    Current Volume
                                </p>
                                <p class="mobile-volume" style="margin: 0; font-size: 36px; font-weight: 700; color: #C8FF00;">
                                    {{currentVolume}}M
                                </p>
                                
                                <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #272727;">
                                    <p style="margin: 0 0 5px 0; font-size: 12px; color: #9E9E9E; text-transform: uppercase; letter-spacing: 0.5px;">
                                        Current Price
                                    </p>
                                    <p style="margin: 0; font-size: 18px; font-weight: 600; color: {{priceColor}};">
                                        {{currentPrice}} ({{changeDirection}}{{changePercent}}%)
                                    </p>
                                </div>
                            </div>
                            
                            <div style="background-color: #1A1A1A; border-radius: 8px; padding: 24px; margin-bottom: 30px; border: 1px solid #272727;">
                                <h3 style="margin: 0 0 15px 0; font-size: 18px; font-weight: 600; color: #F5F5F5;">
                                    Volume Spike Details
                                </h3>
                                <p class="mobile-text" style="margin: 0 0 10px 0; font-size: 16px; line-height: 1.5; color: #9E9E9E;">
                                    <strong>Trigger:</strong> {{alertMessage}}
                                </p>
                                <p class="mobile-text" style="margin: 0 0 10px 0; font-size: 16px; line-height: 1.5; color: #9E9E9E;">
                                    <strong>Average Volume:</strong> {{averageVolume}}M shares
                                </p>
                                <p class="mobile-text" style="margin: 0; font-size: 16px; line-height: 1.5; color: #9E9E9E;">
                                    <strong>Spike Detected:</strong> {{volumeSpike}} above normal
                                </p>
                            </div>
                            
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 30px;">
                                <tr>
                                    <td align="left" class="mobile-button">
                                        <a href="https://stock-market-dev.vercel.app/" style="display: inline-block; background: #C8FF00; color: #000000; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-size: 16px; font-weight: 700; line-height: 1; text-align: center;">
                                            View Dashboard
                                        </a>
                                    </td>
                                </tr>

                             <div style="text-align: left; margin: 40px 0 0 0; border-top: 1px solid #272727; padding-top: 30px;">
                                <p style="margin: 0 0 10px 0; font-size: 14px; line-height: 1.5; color: #9E9E9E;">
                                    You're receiving this because you set a volume alert on tickr.
                                </p>
                                <p style="margin: 0 0 10px 0; font-size: 14px; line-height: 1.5; color: #9E9E9E;">
                                    <a href="#" style="color: #9E9E9E; text-decoration: underline;">Manage Alerts</a> | 
                                    <a href="https://stock-market-dev.vercel.app/" style="color: #9E9E9E; text-decoration: underline;">Visit tickr</a>
                                </p>
                                <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #9E9E9E;">
                                    © 2025 tickr
                                </p>
                            </div>
                        </td>
                    </tr>
                    
                </table>
                </td>
        </tr>
    </table>
</body>
</html>`;

export const INACTIVE_USER_REMINDER_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <meta name="x-apple-disable-message-reformatting">
    <title>We Miss You! Your Market Insights Await</title>
    <style type="text/css">
        @media only screen and (max-width: 600px) {
            .email-container { width: 100% !important; margin: 0 !important; border-radius: 0 !important; }
            .mobile-padding { padding: 24px !important; }
            .mobile-header-padding { padding: 24px 24px 12px 24px !important; }
            .mobile-text { font-size: 14px !important; line-height: 1.5 !important; }
            .mobile-title { font-size: 24px !important; line-height: 1.3 !important; }
            .mobile-button a { width: calc(100% - 64px) !important; display: block !important; text-align: center !important; }
            .mobile-outer-padding { padding: 0 !important; }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #000000; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #000000;">
        <tr>
            <td align="center" class="mobile-outer-padding" style="padding: 40px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="email-container" style="max-width: 600px; background-color: #111111; border-radius: 8px; border: 1px solid #272727;">
                    
                    <tr>
                        <td align="left" class="mobile-header-padding" style="padding: 40px 40px 20px 40px;">
                            <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #C8FF00; letter-spacing: -1px;">
                                tickr
                            </h1>
                        </td>
                    </tr>
                    
                    <tr>
                        <td class="mobile-padding" style="padding: 20px 40px 40px 40px;">
                            
                            <h2 class="mobile-title" style="margin: 0 0 15px 0; font-size: 28px; font-weight: 600; color: #C8FF00; line-height: 1.2;">
                                We Miss You, {{name}}!
                            </h2>
                            
                            <p class="mobile-text" style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #F5F5F5;">
                                We noticed you haven't visited tickr in a while. The markets are moving, and your watchlists are waiting for you.
                            </p>

                            <div style="background-color: #1A1A1A; border: 1px solid #272727; border-radius: 8px; padding: 24px; margin-bottom: 30px;">
                                <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600; color: #C8FF00;">
                                    Your Insights Await
                                </h3>
                                <p class="mobile-text" style="margin: 0; font-size: 14px; line-height: 1.5; color: #F5F5F5;">
                                    Major indices have seen significant movements this week. This is a great time to check on your positions and discover new opportunities.
                                </p>
                            </div>
                            
                            <p class="mobile-text" style="margin: 0 0 40px 0; font-size: 16px; line-height: 1.6; color: #F5F5F5;">
                                Don't let a great opportunity pass you by.
                            </p>
                            
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0 0 20px 0; width: 100%;">
                                <tr>
                                    <td align="left" class="mobile-button">
                                        <a href="{{dashboardUrl}}" style="display: inline-block; background: #C8FF00; color: #000000; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-size: 16px; font-weight: 700; line-height: 1; text-align: center;">
                                            Return to Dashboard
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            
                            <div style="text-align: left; margin: 40px 0 0 0; border-top: 1px solid #272727; padding-top: 30px;">
                                <p style="margin: 0 0 10px 0; font-size: 14px; line-height: 1.5; color: #9E9E9E;">
                                    Questions? Reply to this email or contact our support team.
                                </p>
                                <p style="margin: 0 0 10px 0; font-size: 14px; line-height: 1.5; color: #9E9E9E;">
                                    <a href="{{unsubscribeUrl}}" style="color: #9E9E9E; text-decoration: underline;">Unsubscribe</a> | 
                                    <a href="{{dashboardUrl}}" style="color: #9E9E9E; text-decoration: underline;">Visit tickr</a>
                                </p>
                                <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #9E9E9E;">
                                    © 2025 tickr
                                </p>
                            </div>
                        </td>
                    </tr>
                    
                </table>
                </td>
        </tr>
    </table>
</body>
</html>`;