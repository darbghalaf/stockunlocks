== Nulled by darbghalaf , have fun ;) ==
=== StockUnlocks - Mobile and Cell Phone Unlocking ===
Contributors: stockunlocks
Donate link: https://www.stockunlocks.com/donate
Tags: Dhru Fusion, Dhru Fusion API, GSM Fusion, GSM Fusion API, UnlockBase, NakshSoft, iPhoneAdmin, GSM Genie, GSM Genie API, Dhru API, Dhru, API, E-Commerce, Unlock, Mobile, Mobile Unlock Website, Unlock Codes, Unlocking, Phone Unlock, Phone Unlocking, Cell Phone, Unlock Cell Phone, StockUnlocks
Requires at least: 4.0
Tested up to: 5.2.2
Requires PHP: 7.0
Stable tag: 1.9.5.12
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Create your own mobile unlocking store, without having to write a bunch of code.

== Description ==

Mobile and cell phone unlocking: Automate your mobile unlocking store with the StockUnlocks plugin combined with WooCommerce.

StockUnlocks is designed to transform your website into a remote, mobile unlocking machine.

The power and automation of various Mobile Unlocking APIs makes it all possible. Connect to one or many API mobile unlocking servers and forget about spreadsheets and manual email processing.

Now, focus your time and energy where they're needed the most.

Some of the outstanding features include:

*   Supported APIs: **DHRU Fusion**, **GSM Fusion** (GSM Genie), **iPhoneAdmin**, **NakshSoft**, **UnlockBase**
*   Access to numerous mobile unlocking services from multiple API unlocking providers.
*   Importing unlocking services directly into your own website.
*   Automatic price updating when your supplier's prices change.
*   Automated processing of unlocking requests.
*   Customizing automated email responses to your customers.
*   **NOTE**: The WooCommerce plugin is required in order to use this plugin. If you don't have it, you may download it here:
	[WooCommerce plugin for WordPress](https://wordpress.org/plugins/woocommerce/ "WooCommerce plugin for WordPress")

Sign up for website access at [www.stockunlocks.com](https://www.stockunlocks.com "StockUnlocks Home Page") to join the community and to take advantage of our forums and issue tracking.

== Installation ==

1. Upload the 'stockunlocks.zip' file to the '/wp-content/plugins/' directory
2. Unzip the plugin file
3. Activate the plugin through the 'Plugins' menu in WordPress
4. Create an account at the [StockUnlocks Reseller Website](https://reseller.stockunlocks.com/singup.html "StockUnlocks Reseller Website") in order to fully test your installation
5. Use the 'Plugin Options' in the 'StockUnlocks' plugin menu to update all settings to reflect your website name and contact email address
6. Use the 'Providers' in the 'StockUnlocks' plugin menu to create a new Unlocking Service Provider. This can be for your current provider or the information you received after step 4 was completed
7. Use the 'Import Services' in the 'StockUnlocks' plugin menu to import unlocking services (Products) from your selected Provider
8. Use the 'Products' WooCommerce plugin menu to locate the recently imported Product(s). They will have the status 'Imported'
9. Edit the imported Product to your liking (especially 'Regular Price' found under 'Product Data > General').
10. **Tip**: If you're using the 'TEST - Available' or 'TEST - Unavailable', set your 'Regular Price' to **0.0** to speed up the testing from your website.
11. Change the Product status by clickng 'Publish'. NOTE: Products with status 'Imported' will not work with this plugin until changed to 'Publish'
12. Use the 'Plugin Options' in the 'StockUnlocks' plugin menu to enable and set the cron schedule
13. Navigate to yourwebsite-dotcom/shop and select one of the recently imported test services and place an order
14. Examine the automatic notifications for accuracy. Make needed changes via step 5 above
15. [Installation Video](https://youtu.be/GhQkAgmOyZc "Installation Video")
16. [Plugin Home Page](https://www.stockunlocks.com/forums/forum/stockunlocks-wordpress-plugin/ "Plugin Home Page")
17. Happy unlocking!

== Frequently Asked Questions ==

= Why can't I import Services - not even just one? =

When a large number of services appear in your browser and no matter how many you select to import, you might see this message:

> `No services were imported or updated. Please select fewer services or modify memory settings in wp-config.php or php.ini`

When the plugin sees large amounts of data from your Dhru Fusion supplier, this error appears because of your memory configuration. 
If you can modify the memory settings in your **`wp-config.php`** and **`php.ini`** file, that should resolve it.

Here's what I have in my **`php.ini`**:

*   `max_execution_time = 300 ; Maximum execution time of each script, in seconds`
*   `max_input_time = 60 ; Maximum amount of time each script may spend parsing request data`
*   `memory_limit = 512M ; Maximum amount of memory a script may consume`

Here are the settings in the **`wp-config.php`**:

*   `define( 'WP_MEMORY_LIMIT', '256M' );`
*   `define( 'WP_MAX_MEMORY_LIMIT', '256M' );`

These are the 'default' settings in my installation. So far, it's worked for importing more than 200 services at one time. You may need to tweak these settings according to your needs.

= Hey!! I'm using the Advanced Custom Fields plugin - where did the menu go?? =

StockUnlocks relies on the Advanced Custom Fields plugin as well. ACF is already bundled with StockUnlocks, since there is a provision for doing so. 
Elliot Condon, the creator of ACF, allows distributing ACF in a plugin or theme as outlined here: [Distributing ACF](https://www.advancedcustomfields.com/resources/including-acf-in-a-plugin-theme/ "Distributing ACF"). 

*   To display or hide the ACF Menu, simply navigate to the Admin Dashboard: StockUnlocks > Plugin Options > General > ACF Menu Options: select "Hide ACF Menu" or "Show ACF Menu" as needed.

== Screenshots ==

1. Product Display
2. Providers page
3. Edit Provider page
4. Import Services page
5. Manage Orders page
6. Plugin Options: License
7. Plugin Options: Cron Schedule
8. Plugin Options: Product Options
9. Plugin Options: Notifications
10. Plugin Options: Text Values
11. Plugin Dashboard

== Changelog ==

= 1.9.5.12 - September 30, 2019 =
*   Tweak –  Now show/hide the Advanced Custom Fields (ACF) menu via the StockUnlocks > Plugin Options > General > ACF Menu Options settings.

= 1.9.5.11 - September 2, 2019 =
*   Fix –  Orders linked to missing Products were causing the Manage Orders view to crash.
*   Tweak –  Manage Orders view now properly sorting by latest date at top by default.
*   Tweak –  Unlocking Orders: Code unavailable and Processing error Status values now appear in red.
*   Performance –  Advanced Custom Fields included library updated to v5.8.3.

= 1.9.5 - August 19, 2019 =
*   Localization – Customize field text labels and various messages. For example, change "Bulk Submit: One Per Line" to "Submit as many as you want: Hit Enter after each entry" or translate various text into any language you want.
*   Feature – Product: "Hide Serial field" removes the IMEI/Serial Number field from displaying on the website for specific Products.
*   Feature – Product: "Serial Max Quantity" sets a maximum quantity for IMEI/Serial Numbers when ordering.
*   Enhancement – Product: "Serial Max Length" should be left blank or empty to allow any length when ordering Products. Previously, this value needed to be set to "1".
*   Feature –  Product: Add custom Country/Network or Brand/Model dropdown combinations for specific Products.
*   Feature – Customers can now choose which email address to send unlock codes to: Manually enter an address or send codes to the payment email address entered during checkout.
*   Feature – With Javascript is enabled, field values are retained when errors are made and attempting to submit an order. Thanks to SweetAlert2 for the nice presentation.
*   Feature – PRO Product: Create up to 4 custom fields to submit with orders. These can be simple text entry or drop-down selection type.
*   Tutorials are on the way ...

= 1.9.3 - July 29, 2019 =
*   Fix: Sometimes completed orders would not display on the website. Order details for logged in customers now display properly, regardless of status.
*   Dev: Added the "Manage Orders" page, the one-stop location for keeping an eye on all remote unlock orders. [Contact us](https://www.stockunlocks.com/contact/ "Contact us") to let us know what more you would like to see here!
*   Feature: NEW API Type option added > iPhoneAdmin
*   Enhancement: When placing an order and "Serial Length" is set to "1" for that Product, this allows the submitted serial number(s) to be of any length. This may be used in conjunction with the "Allow text" option.

= 1.9.2.2 - April 11, 2019 =
*   Fix: Dhru Fusion API no longer fails on bulk IMEI submissions
*   Fix: StockUnlocks specific options are removed from the WP database when the plugin is deleted
*   Enhancement: The IMEI field can now accept text values when enabled

= 1.9.2 - April 5, 2019 =
*   Feature: NEW API Type options: NakshSoft and UnlockBase
*   Fix: Pro feature > Automatic price updating fixed and working for all APIs
*   Improvement: Now change the Product Category name from "Remote Service" to whatever you want. As long as the slug ("suwp_service") is not altered, everything will continue to work.

= 1.9.1.1 - March 25, 2019 =
*   Note: GSM Fusion API does not yet support auto price updates, currently disabled. Researching solutions.
*   VERY IMPORTANT: After this update, please DEACTIVATE the StockUnlocks plugin and then ACTIVATE it again

= 1.9.1 - February 26, 2019 =
*   Feature: NEW API Type option: GSM Fusion API (GSM Genie)
*   Dev: Udpated to use the latest version of the Advanced Custom Fields plugin: 4.4.12

= 1.9.0 - December 16, 2018 =
*   Enhancement: Plugin Options now appear on specific Tabs. No more endless scrolling to access what you need!

= 1.8.6 - December 9, 2018 =
*   Dev: Added the ability to manually process unlock orders: [How to Create a Stand-alone Unlock Product](https://www.stockunlocks.com/how-to-create-a-stand-alone-unlock-product/ "How to Create a Stand-alone Unlock Product")

= 1.8.5 - May 29, 2018 =
*   Dev: Preliminary language translation capabilities: Swedish (sv_SE) 

= 1.8.0 - April 15, 2018 =
*   Fix: Removed html formatting from API error replies: No longer distorting the WC Edit order display
*   Dev: Customers can now view their unlock codes and unlock status when logged in under 'My account'
*   Dev: New Shortcode to add the Delivery time, example: [suwp_delivery_time product_id = 232]
*   Improvement: Deleting the StockUnlocks plugin does not delete all Products in the 'Remote  Service' Category. The Category is removed from the Product and the status is changed to 'Pending'.

= 1.7.5 - April 7, 2018 =
*   Fix: Import Services no longer limits certain users to importing less than the selected services in the browser
*   Fix: When order errors occur and the order is set back to Processing, formerly submitted AND successfully replied IMEI DO NOT get resubmitted
*   Fix: Order status and updating is now accurate allowing proper notices to be sent to customers
*   Dev/Change: Deletion of the StockUnlocks plugin now properly removes everything specific to it from your website, leaving no trace behind
*   Mood: Great appreciation for your patience ;-)

= 1.7.0 - April 11, 2018 =
*   Fix: New installations of the plugin are no longer stuck with ERROR on the Plugin Options page
*   Fix: Auto price update no longer silently crashes when attempting to update prices on a Product that is not in the "Remote service" category
*   Fix: StockUnlocks related messages now only appear within the context of the plugin
*   Fix: Plugin status now immediately updates when options are saved
*   Fix: Email notifications now include detailed Phone information based on selected requirements
*   Change: Products are no longer forced to be assigned to a specific Provider (for future functionality)
*   Dev/Change: Pro users can now enable: MEP, Country/Network, Brand/Model and Automatic, synchronized price adjustments for Products

= 1.6.0 - March 13, 2018 =
*   Dev - Plugin Options tab: Added the License email/key combination fields for StockUnlocks Pro access.
*   NOTE - If you have not purchased a StockUnlocks Pro license, please do not change the default values appearing in these fields.

= 1.5.5 - March 8, 2018 =
*   Fix - Scheduled cron job no longer crashes due to attempt to process Product's orders that were not Remote Service.
*   ... Now it just skips over them and keeps on truckin' ...
*   Fix - Provider custom post type no longer has a post_title = Auto Draft. The postmeta value for suwp_sitename is properly transferred.

= 1.5.2 - March 4, 2018 =
*   Fix - WooCommerce > Orders: fixes a problem where Remote Service category orders were not showing up in the view

= 1.5.1 - March 4, 2018 =
*   Fix - Providers: fixes a problem where providers were not showing up in the dashboard
*   NOTE - After this upgrade, simply Deactivate and then Activate the StockUnlocks plugin

= 1.5.0 - March 3, 2018 =
*   Dev - Providers tab: Added the 'USER NAME' column and now can be sorted by title
*   Dev - Cron jobs: Added a 2 minute setting
*   Dev - Code refactoring

= 1.1.3 - January 2, 2018 =
*   Fix - Shopping Cart: Now displaying total number of IMEI for a single order in the Quantity column
*   Fix - Shopping Cart: Item totals for non-StockUnlocks products can now be adjusted
*   Fix - Shopping Cart: Fixed a problem where non-StockUnlocks products totals were reset to 1 when adding to the cart

= 1.1.2 - December 26, 2017 =
*   Fix - Plugin Options: ALL email templates can now be formatted in FULL HTML

= 1.1.1 - December 24, 2017 =
*   Fix - When using PHP 7.1 no longer crashing when Plugin Options is selected
*   Dev - Now using upgraded version of Advanced Custom Fields plugin

= 1.1.0 - April 17, 2017 =
*   Fix - Now updating displayed value for Product Service credit when remote value changes
*   Fix - Order details display formatting now works for WC 3.x and earlier versions
*   Dev - Added support for WC Sequential Order Numbers

= 1.0.9 - April 13, 2017 =
*   Importing Services can now be done while running WP from a sub-directory
*   Automatic price updating - you asked for it, you got it ;-)

= 1.0.8.6 - February 27, 2017 =
*   Fixed formatting and display issues related to themes built on bootstrap

= 1.0.8.4 - February 24, 2017 =
*   Troubleshooting Option now properly retrieves the indicated number of services when enabled
*   Order Status options were changed to a more appropriate wording to include different kinds of orders
*   Activated sending the automated email to Admin when checking an order completely fails

= 1.0.8.1 - February 21, 2017 =
*   Import Services adjusted to reduce potential memory errors

= 1.0.8 - February 20, 2017 =
*   Modifications to allow full processing of a shopping cart with products from different providers
*   New Troubleshooting Option to limit the number of Services when importing
*   Updates 'Thank you for your order' email by changing labels: 'suwp_imei_values' to 'IMEI' and 'suwp_email_response' to 'Email'
*   Moved Product detail labels to appear above their respective fields/selection boxes

= 1.0.7 - February 14, 2017 =
*   Combined Email Templates with the Plugin Options tab

= 1.0.5 - February 13, 2017 =
*   Imported Products are now linked to the proper post_author id
*   Added a unique id for future technical support
*   Additional automated email notifications for admin users
*   Bug fixes

= 1.0.1 - February 11, 2017 =
*   Including the Advanced Custom Fields plugin
*   Defaulting 'Serial length' to '15' when importing services for convenience

= 1.0 - February 11, 2017 =
*   Initial release of plugin

== Upgrade Notice ==

= 1.9.5.12 =
This upgrade allows you to show/hide the Advanced Custom Fields (ACF) menu via the StockUnlocks plugin options settings.
To display or hide the ACF Menu, simply navigate to the Admin Dashboard: StockUnlocks > Plugin Options > General > ACF Menu Options: select "Hide ACF Menu" or "Show ACF Menu" as needed.

= 1.9.5.11 =
For the most part, this is a maintenance upgrade: bug fix regarding missing Products crashing the plugin.
Added color to the "Code unavailable" and "Processing error" Status when viewing listing pages = red.
Advanced Custom Fields included library updated to v5.8.3.

= 1.9.5 =
Now you can ... customize text labels and various messages as you like.
Hide the IMEI/Serial number field on Products that don’t require it.
Set the maximum number of IMEI/Serial numbers that can be ordered per Product.
Create custom Country/Network and/or Brand/Model drop-down combinations for specific Products and more ...

= 1.9.3 =
Order details for logged in users now display properly on your website. View and manage all unlock orders in one place with the "Manage Orders" page.
Added iPhoneAdmin as a new API Type option when creating a Provider.
This upgrade adds the ability to enter any length of characters representing the device’s serial number.

= 1.9.2.2 =
This upgrade fixes the error that would occur when multiple IMEI where submitted when using the Dhru Fusion API.
When deleting the StockUnlocks plugin, now all of its custom options are deleted as well.
Need to enter text values into the IMEI field when using it to submit serial numbers? Yes you can.
Just edit the Product and scroll down to: Product data > StockUnlocks and find the "Allow text" checkbox.

= 1.9.2 =
This upgrade adds NakshSoft and UnlockBase as API Type options when creating a Provider.
Also, the 'Remote Service' Product category may be renamed as desired.
Pro feature: Automatic price updating now works for all APIs.

= 1.9.1.1 =
Note: GSM Fusion API does not yet support auto price updates, currently disabled. Researching solutions.
VERY IMPORTANT: After this update, please DEACTIVATE the StockUnlocks plugin and then ACTIVATE it again

= 1.9.1 =
This upgrade adds the long awaited GSM Fusion API (GSM Genie) as an API Type option when creating a Provider.
NOTE: After upgrading: Edit any exsisting Providers and click on API Type, select Dhru Fusion and save your changes.

= 1.9.0 =
This upgrade improves the Plugin Options user interface by seperating/grouping options. New Tabs: License information, General, Notifications. 

= 1.8.6 =
This upgrade adds the ability to manually process unlock orders. It requires changing API Provider to: Stand-alone Unlock.
For details: https://www.stockunlocks.com/how-to-create-a-stand-alone-unlock-product/

= 1.8.5 =
This upgrade adds language translation functionality. Examine the stockunlocks.pot file for the original text to be translated into your preferred language. 

= 1.8.0 =
This upgrade fixes order ui dispaly issues, shows unlock codes/status to logged-in customers, and adds a Shortcode to display Delivery time.

= 1.7.5 =
This upgrade fixes bugs related to order status updating and stuck processing.
This also resolves the remote service importing issue for some users where, no matter what the memory settngs were, limited services were being imported. 

= 1.7.0 =
This upgrade fixes bugs and prepares the foundation for v2.0

= 1.6.0 =
This upgrade introduces the License email/key combination fields in the Plugin Options tab for Pro access.
If you have not purchased a StockUnlocks Pro license, please do not change the default values appearing these fields.

= 1.5.5 =
This upgrade fixes a problem where the scheduled cron job would sometimes crash due to trying to process orders for virtual Products that were not for unlocking.
In addition to that, the Provider custom post type's post_title value is no longer defaulting to Auto Draft when being saved or updated.

= 1.5.2 =
This upgrade fixes a problem where WooCommerce > Orders was not displaying Remote Service category orders after the 1.5.0 upgrade.
Orders were still present in the database, but were not showing up in the main view.

= 1.5.1 =
This upgrade fixes a problem where Providers were no longer appearing after the 1.5.0 upgrade.
After this upgrade, simply Deactivate and then Activate the StockUnlocks plugin.

= 1.5.0 =
This upgrade adds: the 'USER NAME' column to the Providers tab, a 2 minute cron job setting, and some code refactoring.

= 1.1.3 =
Tuned up the Shopping Cart:
This upgrade fixes a problem where the total quantity display was blank and standard product totals weren't editable.
Also, standard product totals are no longer reset to one (1) when adding custom products to the cart.

= 1.1.2 =
Format ALL messages in FULL HTML!
This upgrade fixes a long standing problem where email templates were stuck sending in plain text.

= 1.1.1 =
This upgrade fixes a problem when your website is running PHP 7.1 and above.
Udpated to use the latest version of the Advanced Custom Fields plugin.

= 1.1.0 =
This upgrade fixes a problem where the Product service credit value was not being updated.
Udpated for WC 3.x and added backwards compatibility for 2.x
Now supporting WC Sequential Order Numbers.

= 1.0.9 =
This upgrade fixes the wp ajax URL problem when WP is installed in a sub-directory.
Access settings for automatic price updates via a single Product or Plugin Options.

= 1.0.8.6 =
This upgrade fixes a critical formatting and display issue for themes built on bootstrap 

= 1.0.8.4 =
This upgrade fixes the number of retrieved services to match the setting when the Troubleshooting Option is enabled. 
The Order Status choices were changed to be more informative. 
Automated message now being sent to Admin when checking on an order encounters a fatal error

= 1.0.8.1 =
This important upgrade reduces the memory used when importing services. This will cut down on the errors. 
All credit goes to a power user for pointing out a needed jQuery adjustment ;-)

= 1.0.8 =
This upgrade ensures Products from multiple Providers in one cart are all processed. 
New Troubleshooting Option limits the number of Services to be imported when tracking memory issues. 
Changed labels in email notifications: 'suwp_imei_values' to 'IMEI' and 'suwp_email_response' to 'Email'.

= 1.0.7 =
Combined Email Templates with the Plugin Options tab to prevent option settings being reset to default values when saving on either tab. 
All options now reside in one place.

= 1.0.5 =
When importing Products, now properly attributing the import to the post_author's id: $user_id = get_current_user_id(). 
Added an internal 'Support ID' for future technical support. 
Enabled automated email notifications for admin users when orders fail.

= 1.0.1 =
This upgrade now includes the Advanced Custom Fields plugin. When importing services, now defaulting its 'Serial length' value to '15'. 
This value can always be changed directly in the UI after import. The idea is to give you one less thing to look for after importing.

= 1.0 =
This is the initial release of the StockUnlocks plugin for WordPress

== Learn how to use this plugin! ==

Check out the [Tutorials](https://www.youtube.com/stockunlocks "Tutorials") on our channel to learn more about using the StockUnlocks plugin for WordPress. Head over to [www.youtube.com/stockunlocks](https://www.youtube.com/stockunlocks "StockUnlocks on YouTube") to learn more!
