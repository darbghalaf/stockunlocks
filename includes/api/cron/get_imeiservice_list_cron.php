<?php

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

function suwp_dhru_get_imeiservice_list_cron( $post_id ) {
    
    $suwp_apitype = get_field('suwp_apitype', $post_id );
    // not yet converted, use the default
    if ( $suwp_apitype == NULL || $suwp_apitype == '' ) {
      $suwp_apitype = '00';
    }
    
    $plugin_admin = new Stock_Unlocks_Admin( 'stockunlocks', STOCKUNLOCKS_VERSION );

    $apidetails = $plugin_admin->suwp_dhru_get_provider_array( $post_id );
    
    // get the api details
    $suwp_dhru_url = $apidetails['suwp_dhru_url'];
    $suwp_dhru_username = $apidetails['suwp_dhru_username'];
    $suwp_dhru_api_key = $apidetails['suwp_dhru_api_key'];
    
    // >>> include( plugin_dir_path( __FILE__ ) . 'providers/get_imeiservice_list_constants_' . $post_id . '_cron.php' );
    include( SUWP_TEMP . 'suwp_get_imeiservice_list_constants_' . $post_id . '_cron.php' );
    
    // >>> include( plugin_dir_path( __FILE__ ) . 'providers/get_imeiservice_list_api_' . $post_id . '_cron.php' );
    include( SUWP_TEMP . 'suwp_get_imeiservice_list_api_' . $post_id . '_cron.php' );
    
    $flag_continue = FALSE;
    $services = array();
    $request = array();

// DHRU FUSION .... START
  if ($suwp_apitype == '00') {
      // Debug on
      $api->debug = true;

      $request = $api->action('imeiservicelist');
      
      if (is_array($request)) {
          // error_log('ALL IMEI SERVICES: '. print_r($request,true));
          // error_log('HELLO ALL IMEI SERVICES: ');
          $iterator = new RecursiveIteratorIterator(new RecursiveArrayIterator($request), RecursiveIteratorIterator::SELF_FIRST);
          foreach ($iterator as $key1 => $val1) {
            if ($key1 === 'LIST') {
              if (is_array($val1)) {
                foreach ($val1 as $key2 => $val2) {
                  $tmp_id = $key2;
                  if (is_array($val2)) {
                    foreach ($val2 as $key3 => $val3) {
                      if ($key3 === 'GROUPNAME') {
                        $tmp_groupname = $val3;
                      }
                      if ($key3 === 'SERVICES') {
                        $flag_continue = TRUE;
                        if (is_array($val3)) {
                          foreach ($val3 as $key4 => $val4) {
                            if (is_array($val4)) {
                              $tmp_id = '';
                              $tmp_servicename = '';
                              $tmp_credit = '';
                              $tmp_time = '';
                              $tmp_info = '';
                              $tmp_requiresnetwork = '';
                              $tmp_requiresmobile = '';
                              $tmp_requiresprovider = '';
                              $tmp_requirespin = '';
                              $tmp_requireskbh = '';
                              $tmp_requiresmep = '';
                              $tmp_requiresprd = '';
                              $tmp_requirestype = '';
                              $tmp_requireslocks = '';
                              $tmp_requiresreference = '';
                              foreach ($val4 as $key5 => $val5) {
                                if ($key5 === 'SERVICEID') {
                                  $tmp_id = $val5;
                                }
                                if ($key5 === 'SERVICENAME') {
                                  $tmp_servicename = $val5;
                                }
                                if ($key5 === 'CREDIT') {
                                  $tmp_credit = $val5;
                                }
                                if ($key5 === 'TIME') {
                                  $tmp_time = $val5;
                                }
                                if ($key5 === 'INFO') {
                                  $tmp_info = $val5;
                                }
                                if ($key5 === 'Requires.Network') {
                                  $tmp_requiresnetwork = $val5;
                                }
                                if ($key5 === 'Requires.Mobile') {
                                  $tmp_requiresmobile = $val5;
                                }
                                if ($key5 === 'Requires.Provider') {
                                  $tmp_requiresprovider = $val5;
                                }
                                if ($key5 === 'Requires.PIN') {
                                  $tmp_requirespin = $val5;
                                }
                                if ($key5 === 'Requires.KBH') {
                                  $tmp_requireskbh = $val5;
                                }
                                if ($key5 === 'Requires.MEP') {
                                  $tmp_requiresmep = $val5;
                                }
                                if ($key5 === 'Requires.PRD') {
                                  $tmp_requiresprd = $val5;
                                }
                                if ($key5 === 'Requires.Type') {
                                  $tmp_requirestype = $val5;
                                }
                                if ($key5 === 'Requires.Locks') {
                                  $tmp_requireslocks = $val5;
                                }
                                if ($key5 === 'Requires.Reference') {
                                  $tmp_requiresreference = $val5;
                                }
                                if ($tmp_requiresreference != '') {
                                  $tmp_key = $tmp_id . '-php-' . $tmp_groupname . '-php-' . $tmp_servicename;
                                  $tmp_key_id_display = $tmp_id;
                                  $services[] = array(
                                    'GROUPID' => '',
                                    'ID' => $tmp_id,
                                    'ID_DISPLAY' => $tmp_key_id_display,
                                    'NETWORKPROVIDER' => '',
                                    'GROUPNAME' => $tmp_groupname,
                                    'SERVICENAME' => $tmp_servicename,
                                    'INFO' => $tmp_info,
                                    'Requires.Network' => $tmp_requiresnetwork,
                                    'Requires.Mobile' => $tmp_requiresmobile,
                                    'Requires.Provider' => $tmp_requiresprovider,
                                    'Requires.PIN' => $tmp_requirespin,
                                    'Requires.KBH' => $tmp_requireskbh,
                                    'Requires.MEP' => $tmp_requiresmep,
                                    'Requires.PRD' => $tmp_requiresprd,
                                    'Requires.Type' => $tmp_requirestype,
                                    'Requires.Locks' => $tmp_requireslocks,
                                    'Requires.Reference' => $tmp_requiresreference,
                                    'CREDIT' => $tmp_credit,
                                    'TIME' => $tmp_time,
                                  );
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
      }
  }
    
    $request_serialized = json_encode($request, JSON_FORCE_OBJECT);
    $reply_serialized = json_encode($services, JSON_FORCE_OBJECT);

    $item = 0;

    $complete = array();
    $reply_part = array();
    $reply_all = array();
    
    if ( $flag_continue ) {
        
        // set up column headers
        $reply_part[] = array(
              'serviceid' => 'serviceid',
              'servicename' => 'servicename',
              'time' => 'time',
              'credit' => 'credit',
        );

        $reply_all[] = array(
              'serviceid' => 'serviceid',
              'servicename' => 'servicename',
              'time' => 'time',
              'credit' => 'credit',
              'groupname' => 'groupname',
              'info' => 'info',
              'network' => 'network',
              'mobile' => 'mobile',
              'provider' => 'provider',
              'pin' => 'pin',
              'kbh' => 'kbh',
              'mep' => 'mep',
              'prd' => 'prd',
              'type' => 'type',
              'locks' => 'locks',
              'reference' => 'reference',
              'groupid' => 'groupid',
        );
        
        foreach ($services as $service) {
            
          // Begin extraction at the actual service id.
          if ((!empty($service['ID']) && ($service['ID'] != NULL))) {
            
            ++$item;
            
            $reply_part[$service['ID']] = array(
              'serviceid' => $service['ID_DISPLAY'],
              'servicename' => $service['SERVICENAME'],
              'time' => $service['TIME'],
              'credit' => $service['CREDIT'],
            );
            
            $reply_all[$service['ID']] = array(
              'serviceid' => $service['ID_DISPLAY'],
              'servicename' => $service['SERVICENAME'],
              'time' => $service['TIME'],
              'credit' => $service['CREDIT'],
              'groupname' => $service['GROUPNAME'],
              'info' => $service['INFO'],
              'network' => $service['Requires.Network'],
              'mobile' => $service['Requires.Mobile'],
              'provider' => $service['Requires.Provider'],
              'pin' => $service['Requires.PIN'],
              'kbh' => $service['Requires.KBH'],
              'mep' => $service['Requires.MEP'],
              'prd' => $service['Requires.PRD'],
              'type' => $service['Requires.Type'],
              'locks' => $service['Requires.Locks'],
              'reference' => $service['Requires.Reference'],
              'networkprovider' => $service['NETWORKPROVIDER'],
              'groupid' => $service['GROUPID'],
            );
            
          }
        }
        
    $complete[] = $reply_part;
    $complete[] = $reply_all;
    
    }
    
    // return partial and full details
    return $complete;

}

?>
