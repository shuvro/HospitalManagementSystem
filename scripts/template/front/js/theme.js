;
(function($) {
    "use strict";
    var fixed_menu = true;

    var fullscreen_slider = jQuery('.fullscreen_slider');
    var subscribe_module  = jQuery('.shortcode_subscribe');
    var form_tags = jQuery('.form-allowed-tags');

    // Custom select
    function gt3_enableSelectBoxes() {
        jQuery('div.selectBox').each(function () {
            jQuery(this).children('span.selected').html(jQuery(this).children('div.selectOptions').children('span.selectOption:first').html());
            jQuery(this).attr('value', jQuery(this).children('div.selectOptions').children('span.selectOption:first').attr('value'));

            jQuery(this).children('span.selected, span.selectArrow').on("click", function () {
                var selectbox_parent = jQuery(this).parent().children('div.selectOptions');
                if (selectbox_parent.css('display') == 'none') {
                    selectbox_parent.css('display', 'block');
                    jQuery(this).parents('.selectBox').addClass('act');
                }
                else {
                    selectbox_parent.css('display', 'none');
                    jQuery(this).parents('.selectBox').removeClass('act');
                }
            });

            jQuery(this).find('span.selectOption').on("click", function () {
                jQuery(this).parent().css('display', 'none');
                jQuery(this).closest('div.selectBox').attr('value', jQuery(this).attr('value'));
                jQuery(this).parent().siblings('span.selected').html(jQuery(this).html());
                jQuery(this).parents('.selectBox').removeClass('act');
            });

            jQuery("div.selectOptions").mouseleave(function () {
                jQuery('div.selectOptions').css('display', 'none');
                jQuery('.selectBox').removeClass('act');
            });

        });
    }

    function gt3_fw_block() {
        var div_tag = jQuery('div');
        if (div_tag.hasClass('right-sidebar') || div_tag.hasClass('left-sidebar')) {
        } else {
            var fw_block = jQuery('.fw_block');
            var fw_block_parent = fw_block.parent().width();
            var fw_site_width = fw_block.parents('.wrapper').width();
            var fw_contentarea_site_width_diff = fw_site_width - fw_block_parent;

            fw_block.css('margin-left', '-' + fw_contentarea_site_width_diff / 2 + 'px').css('width', fw_site_width + 'px').children('.fw_wrapinner').css('padding-left', fw_contentarea_site_width_diff / 2 + 'px').css('padding-right', fw_contentarea_site_width_diff / 2 + 'px');
            jQuery('.wall_wrap .fw_wrapinner').css('padding-left', '0px').css('padding-right', '0px');
        }
    }

    // Subscribe Shortcode
    function gt3_subscribe_block() {
        jQuery('.shortcode_subscribe form').css({'padding-right': jQuery('.shortcode_subscribe .subscribe_btn').width() + 20 + 'px'});
    }

    // Video Background Section
    function gt3_video_bg() {
        jQuery('.video_bg').each(function () {
            var iframe_height = jQuery(this).height() + 150;
            var video_code_frame = jQuery(this).find('.video_code iframe');
            if ((iframe_height * 16) / 9 < jQuery(window).width()) {
                video_code_frame.css({
                    'width': jQuery(window).width() + 'px',
                    'height': jQuery(window).width() / 16 * 9 + 'px'
                });
                video_code_frame.css({
                    'margin': 0,
                    'margin-top': (-1 * ((video_code_frame.height() - iframe_height) / 2)) + 'px'
                });
            } else {
                video_code_frame.css({
                    'height': iframe_height + 'px',
                    'width': iframe_height * 16 / 9 + 'px'
                });
                video_code_frame.css({
                    'margin': 0,
                    'margin-left': -(video_code_frame.width() - jQuery(window).width()) / 2 + 'px'
                });
            }
        });
    }

    //	Video iframe height
    function gt3_video_size() {
        jQuery('.blog_post_video, .video_module').each(function () {
            jQuery(this).find('iframe').css({'height': jQuery(this).width() * 9 / 16 + 'px'});
        });
    }

    // Colored Section
    function gt3_colored_section() {
        var maxHeight = 0;
        var colored_class = jQuery(".colored_section");
        colored_class.css({'height': 'auto'});
        colored_class.each(function () {
            if (jQuery(this).height() > maxHeight) {
                maxHeight = jQuery(this).height();
            }
        });
        colored_class.height(maxHeight);
    }

    // Flip Box
    function gt3_flip_box() {
        var flipmaxHeight = 0;
        var ifb_face = jQuery(".flip_box_section .ifb-face");
        jQuery(".ifb-face").css({'height': 'auto'});

        ifb_face.each(function () {
            if (jQuery(this).find('.ifb-flip-box-section').height() > flipmaxHeight) {
                flipmaxHeight = jQuery(this).find('.ifb-flip-box-section').height() + 48;
            }
        });
        ifb_face.height(flipmaxHeight);
    }

    // Info Circle
    function gt3_info_circle() {
        var info_circle_fa = jQuery(".info_circle .fa");
        var info_circle = jQuery(".info_circle");
        var active_class = jQuery(".active");
        var circle_info = jQuery(".circle_info");

        info_circle.each(function () {
            // Wrap height
            jQuery(this).height(jQuery(this).width());

            // Info Circle Position
            var divTop = (jQuery(this).height() - jQuery(this).find('.info_circle_middle').height()) / 2;
            var divLeft = (jQuery(this).width() - jQuery(this).find('.info_circle_middle').width()) / 2;
            jQuery(this).find('.info_circle_middle').css("top", divTop + "px");
            jQuery(this).find('.info_circle_middle').css("left", divLeft + "px");

            // Icons Position
            var numItems = info_circle_fa.length; // Items count
            var start = 4.71; // The angle to put the first icon (0 - 2pi)
            var step = (2 * Math.PI) / numItems; // Calculate space between items.

            info_circle_fa.each(function (index) {
                var radius = (info_circle.width() - jQuery(this).width()) / 2 + jQuery(this).width() / 2;
                var tmpTop = ((info_circle.height() / 2) + radius * Math.sin(start)) - (jQuery(this).height() / 2);
                var tmpLeft = ((info_circle.width() / 2) + radius * Math.cos(start)) - (jQuery(this).width() / 2);
                start += step;
                jQuery(this).waypoint(function () {
                    jQuery(this).css("top", tmpTop);
                    jQuery(this).css("left", tmpLeft);
                }, {offset: 'bottom-in-view', triggerOnce: true});
            });

            // Set default based on the active class
            var current = active_class.attr("id");
            circle_info.html("<h5>" + active_class.data("title") + "</h5><p>" + active_class.data("descr") + "</p>");

            // Setup info on mouseover ans click
            info_circle_fa.mouseover(function () {
                circle_info.html("<h5>" + jQuery(this).data("title") + "</h5><p>" + jQuery(this).data("descr") + "</p>");
                circle_info.hide();
                circle_info.fadeIn(400);
                info_circle_fa.removeClass('active');
                jQuery(this).addClass('active');
                var current = jQuery(this).attr("id");
            });
        });
    }

    // Mega Menu
    function gt3_megamenu() {
        var mega_menu_class = jQuery('.megamenu');
        var menu_container_div = jQuery(".megamenu_wrap .container .row > div");
        if (mega_menu_class.size() > 0) {
            jQuery('.megamenu .sub-nav').css({'width': jQuery('.container').width() + 'px'});
            jQuery('.megamenu_wrap .container').css({'width': jQuery('.wrapper .container').width() + 'px'});
            mega_menu_class.each(function () {
                var left_marg = jQuery(this).offset().left - (jQuery(window).width() - jQuery('.container').width()) / 2;
                jQuery(this).find('.sub-nav').css({'margin-left': '-' + left_marg + 'px'});
            });
            var maxcolumnHeight = 0;
            menu_container_div.css({'height': 'auto'});
            menu_container_div.each(function () {
                if (jQuery(this).height() > maxcolumnHeight) {
                    maxcolumnHeight = jQuery(this).height();
                }
            });
            menu_container_div.height(maxcolumnHeight);
        }
    }

    jQuery(document).ready(function () {
        var bodytimer = setTimeout(function () {
            jQuery('body').animate({'opacity': '1'}, 800);
            clearTimeout(bodytimer);
        }, 500);

        // Fixed Menu
        var fixed_menu_class = jQuery('.fixed-menu');
        var header_wrap_class = jQuery('.header_parent_wrap');
        if (fixed_menu_class.size() > 0 && fixed_menu == true) {
            fixed_menu_class.append(header_wrap_class.html());
            fixed_menu_class.css({'top': - fixed_menu_class.height()*2 + 'px'});

            fixed_menu_class.addClass(jQuery('#main_header').attr('class'));
            jQuery(window).on('scroll', function () {
                var header_offset = '';
                if (jQuery('.first-module').hasClass("module_slider")) {
                    header_offset = jQuery(window).height() - (jQuery('.logo_sect img').height() + 72);
                }
                else {
                    header_offset = header_wrap_class.offset().top + header_wrap_class.height()*2;
                }
                if (jQuery(window).scrollTop() > header_offset) {
                    fixed_menu_class.addClass('fixed_show');
                } else {
                    fixed_menu_class.removeClass('fixed_show');
                }
                gt3_megamenu();
            });
        }

        // SubMenu
        jQuery("nav .menu > li").hoverIntent({
            sensitivity: 1, // number = sensitivity threshold (must be 1 or higher)
            interval: 400,  // number = milliseconds for onMouseOver polling interval
            timeout: 500,   // number = milliseconds delay before onMouseOut
            over:function(){
                jQuery(this).removeClass("hoverOut").toggleClass("hoverIn");
            },
            out: function(){
                jQuery(this).removeClass("hoverIn").toggleClass("hoverOut");
            }
        });

        // Header Height
        var header_container = jQuery('header .container');
        var logo_img = jQuery('.logo_sect img');

        if (header_container.size() > 0 && logo_img.size() > 0) {
            //header_container.height(logo_img.height());
        }

        // MobileMenu
        var header_tag = jQuery('header');
        header_tag.append('<a href="#" class="menu_toggler"></a><div class="mobile_menu_wrapper"><ul class="mobile_menu container"/></div>');
        jQuery('.mobile_menu').html(header_tag.find('.menu').html());
        jQuery('.mobile_menu_wrapper').hide();
        jQuery('.menu_toggler').on("click", function () {
            jQuery('.mobile_menu_wrapper').slideToggle(300);
            jQuery(this).toggleClass("close_toggler");
            return false;
        });
        jQuery('.mobile_menu a').each(function () {
            jQuery(this).addClass("mob_link");
        });
        var mega_menu_class = jQuery('.megamenu');
        if (mega_menu_class.size() > 0) {
            mega_menu_class.each(function () {
                if (jQuery(this).hasClass('mega_submenu')) {
                } else {
                    jQuery(this).find('.megamenu_wrap a').removeClass("mob_link");
                }
            });
        }
        jQuery('.mobile_menu li').find('a').on("click", function () {
            jQuery(this).parent().toggleClass("showsub");
            return false;
        });

        if (jQuery('.shop_ordering').size() > 0 || jQuery('.selectBox').size() > 0) {
            // Custom select
            gt3_enableSelectBoxes();
        }

        // Top Search
        if (jQuery('.top_search').size() > 0) {
            jQuery('.search_btn').on("click", function () {
                jQuery('.top_search').toggleClass("active");
                return false;
            });
            jQuery("html, body").on('click', function (e) {
                if (!jQuery(e.target).hasClass("not_click")) {
                    jQuery('.top_search').removeClass("active");
                }
            });
        }

        // Search Submit
        var search_form_class = jQuery('.search_form');
        if (search_form_class.size() > 0) {
            search_form_class.each(function () {
                var $this = jQuery(this);
                $this.find('input[type="submit"]').mouseenter(function () {
                    $this.addClass('active_submit');
                }).mouseleave(function () {
                        $this.removeClass('active_submit');
                    }
                );
            });
        }

        // NivoSlider
        var nivoslider_class = jQuery('.nivoSlider');
        if (nivoslider_class.size() > 0) {
            nivoslider_class.each(function () {
                jQuery(this).nivoSlider({
                    directionNav: false,
                    controlNav: true,
                    effect: 'fade',
                    pauseTime: 4000,
                    slices: 1
                });
            });
        }

        // Flickr
        var flickr_wrap = jQuery('.flickr_widget_wrapper');
        if (flickr_wrap.size() > 0) {
            jQuery('.flickr_badge_image a').each(function () {
                jQuery(this).append('<div class="flickr_fadder"></div>');
            });
        }

        // Counter
        var counter_module = jQuery('.shortcode_counter');
        if (counter_module.size() > 0) {
            if (jQuery(window).width() > 760) {
                counter_module.each(function () {
                    if (jQuery(this).offset().top < jQuery(window).height()) {
                        if (!jQuery(this).hasClass('done')) {
                            var set_count = jQuery(this).find('.stat_count').attr('data-count');
                            jQuery(this).find('.stat_temp').stop().animate({width: set_count}, {
                                duration: 3000, step: function (now) {
                                    var data = Math.floor(now);
                                    jQuery(this).parents('.counter_wrapper').find('.stat_count').html(data);
                                }
                            });
                            jQuery(this).addClass('done');
                            jQuery(this).find('.stat_count');
                        }
                    } else {
                        jQuery(this).waypoint(function () {
                            if (!jQuery(this).hasClass('done')) {
                                var set_count = jQuery(this).find('.stat_count').attr('data-count');
                                jQuery(this).find('.stat_temp').stop().animate({width: set_count}, {
                                    duration: 3000, step: function (now) {
                                        var data = Math.floor(now);
                                        jQuery(this).parents('.counter_wrapper').find('.stat_count').html(data);
                                    }
                                });
                                jQuery(this).addClass('done');
                                jQuery(this).find('.stat_count');
                            }
                        }, {offset: 'bottom-in-view'});
                    }
                });
            } else {
                counter_module.each(function () {
                    var set_count = jQuery(this).find('.stat_count').attr('data-count');
                    jQuery(this).find('.stat_temp').animate({width: set_count}, {
                        duration: 3000, step: function (now) {
                            var data = Math.floor(now);
                            jQuery(this).parents('.counter_wrapper').find('.stat_count').html(data);
                        }
                    });
                    jQuery(this).find('.stat_count');
                }, {offset: 'bottom-in-view'});
            }
        }

        // Skills
        if (jQuery('.shortcode_skills').size() > 0) {
            if (jQuery(window).width() > 760) {
                jQuery('.module_skills').waypoint(function () {
                    jQuery('.skill_div').each(function () {
                        var set_width = jQuery(this).attr('data-percent');
                        var set_bg = jQuery(this).attr('data-background');
                        jQuery(this).css('background', set_bg);
                        jQuery(this).stop().animate({'width': set_width}, 1500);
                    });
                }, {offset: 'bottom-in-view'});
            } else {
                jQuery('.skill_div').each(function () {
                    jQuery('.skill_div').each(function () {
                        var set_width = jQuery(this).attr('data-percent');
                        var set_bg = jQuery(this).attr('data-background');
                        jQuery(this).css('background', set_bg);
                        jQuery(this).stop().animate({'width': set_width}, 1000);
                    });
                });
            }
        }

        // Accordion & Toggle
        if (jQuery('.module_accordion').size() > 0 || jQuery('.module_toggle').size() > 0) {
            jQuery('.shortcode_accordion_item_title').on("click", function () {
                if (!jQuery(this).hasClass('state-active')) {
                    jQuery(this).parents('.shortcode_accordion_shortcode').find('.shortcode_accordion_item_body').slideUp('fast');
                    jQuery(this).next().slideToggle('fast');
                    jQuery(this).parents('.shortcode_accordion_shortcode').find('.state-active').removeClass('state-active');
                    jQuery(this).addClass('state-active');
                }
            });
            jQuery('.shortcode_toggles_item_title').on("click", function () {
                jQuery(this).next().slideToggle('fast');
                jQuery(this).toggleClass('state-active');
            });

            jQuery('.shortcode_accordion_item_title.expanded_yes, .shortcode_toggles_item_title.expanded_yes').each(function (index) {
                jQuery(this).next().slideDown('fast');
                jQuery(this).addClass('state-active');
            });
        }

        // Tabs
        var tabs_module = jQuery('.shortcode_tabs');
        if (tabs_module.size() > 0) {
            tabs_module.each(function (index) {
                var i = '';
                // GET ALL HEADERS
                i = 1;
                jQuery(this).find('.shortcode_tab_item_title').each(function (index) {
                    jQuery(this).addClass('it' + i);
                    jQuery(this).attr('whatopen', 'body' + i);
                    jQuery(this).addClass('head' + i);
                    jQuery(this).parents('.shortcode_tabs').find('.all_heads_cont').append(this);
                    i++;
                });

                // GET ALL BODY
                i = 1;
                jQuery(this).find('.shortcode_tab_item_body').each(function (index) {
                    jQuery(this).addClass('body' + i);
                    jQuery(this).addClass('it' + i);
                    jQuery(this).parents('.shortcode_tabs').find('.all_body_cont').append(this);
                    i++;
                });

                // OPEN ON START
                jQuery(this).find('.expand_yes').addClass('active');
                var whatopenOnStart = jQuery(this).find('.expand_yes').attr('whatopen');
                jQuery(this).find('.' + whatopenOnStart).fadeIn();
                jQuery(this).find('.' + whatopenOnStart).addClass('active');
            });

            jQuery(document).on('click', '.shortcode_tab_item_title', function () {
                jQuery(this).parents('.shortcode_tabs').find('.shortcode_tab_item_body').removeClass('active');
                jQuery(this).parents('.shortcode_tabs').find('.shortcode_tab_item_title').removeClass('active');
                var whatopen = jQuery(this).attr('whatopen');
                jQuery(this).parents('div.shortcode_tabs').find('.shortcode_tab_item_body').hide();
                jQuery(this).parents('.shortcode_tabs').find('.' + whatopen).fadeIn();
                jQuery(this).parents('.shortcode_tabs').find('.' + whatopen).addClass('active');
                jQuery(this).addClass('active');
            });
        }

        // Contact form
        if (jQuery('.contact_form').size() > 0) {
            jQuery(".ajax-contact-form").on("submit", function () {
				//event.preventDefault();
				var fo 		= 'ok';
				var nam 	= $('input[name=name]').val();
				var email 	= $('input[name=email]').val();
				var subject = $('input[name=subject]').val();
				var message = $('textarea[name=message]').val();
				
				if(nam == ''){
					fo 		= 'no';
					$('input[name=name]').addClass('bord');
				}
				if(email == ''){
					fo 		= 'no';
					$('input[name=email]').addClass('bord');
				}
				if(subject == ''){
					fo 		= 'no';
					$('input[name=subject]').addClass('bord');
				}
				if(message == ''){
					fo 		= 'no';
					$('textarea[name=message]').addClass('bord');
				}
				
				if(fo == 'ok'){
					$('input[name=name]').removeClass('bord');
					$('input[name=email]').removeClass('bord');
					$('input[name=subject]').removeClass('bord');
					$('textarea[name=message]').removeClass('bord');
					//alert('ok');
					var str = $(this).serialize();
					var result = '';
					$.ajax({
						type: "POST",
						url: base_url+"index.php/home/contact_message",
						data: str,
						success: function (msg) {
							// Message Sent - Show the 'Thank You' message and hide the form
							if (msg == 'OK') {
								alert('fff3');
								result = '<div class="notification_ok">Your message has been sent. Thank you!</div>';
								jQuery("#fields").hide();
							} else {
								result = msg;
							}
							jQuery('#note').html(result);
						}
					});
				}
                return false;
            });
			
			
            jQuery(".ajax-contact-form1").on("submit", function () {
				//event.preventDefault();
				var fo 		= 'ok';
				var nam 	= $('input[name=name1]').val();
				var email 	= $('input[name=email1]').val();
				var subject = $('input[name=subject1]').val();
				var message = $('textarea[name=message1]').val();
				
				if(nam == ''){
					fo 		= 'no';
					$('input[name=name1]').addClass('bord');
				}
				if(email == ''){
					fo 		= 'no';
					$('input[name=email1]').addClass('bord');
				}
				if(subject == ''){
					fo 		= 'no';
					$('input[name=subject1]').addClass('bord');
				}
				if(message == ''){
					fo 		= 'no';
					$('textarea[name=message1]').addClass('bord');
				}
				
				if(fo == 'ok'){
					$('input[name=name1]').removeClass('bord');
					$('input[name=email1]').removeClass('bord');
					$('input[name=subject1]').removeClass('bord');
					$('textarea[name=message1]').removeClass('bord');
					var str = $(this).serialize();
					var result = '';
					$.ajax({
						type: "POST",
						url: base_url+"index.php/home/contact_message1",
						data: str,
						success: function (msg) {
							// Message Sent - Show the 'Thank You' message and hide the form
							if (msg == 'OK') {
								result = '<div class="notification_ok">Your message has been sent. Thank you!</div>';
								jQuery("#fields1").hide();
							} else {
								result = msg;
							}
							jQuery('#note1').html(result);
						}
					});
				}
                return false;
            });
        }

        jQuery('.fw_block').not(".wall_wrap").wrapInner('<div class="fw_wrapinner"></div>');

        gt3_fw_block();

        var header_cart = jQuery('.cart_in_header');
        var cart_btn = jQuery('.cart_btn');
        if (header_cart.size() > 0 && cart_btn.size() > 0) {
            header_cart.append('<div class="cart_btn">' + cart_btn.html() + '</div>');
        }

        var header_socials = jQuery('.socials_in_header');
        var social_icons = jQuery('.social_icons');
        if (header_socials.size() > 0 && social_icons.size() > 0) {
            header_socials.append('<div class="social_icons">' + social_icons.html() + '</div>');
        }

        // Header Cart Info
        if (jQuery('.cart_wrap').size() > 0) {
            jQuery('.remove_products').on("click", function () {
                jQuery('.cart_wrap').hide();
                jQuery('.cart_submenu, .widget_cart').append('<p class="empty">No products in the cart.</p>');
                jQuery('.view_cart_btn').empty().append('<i class="fa fa-shopping-cart"></i> $0.00 (0 items)');
                return false;
            });
        }

        if (jQuery('.first-module').hasClass("module_slider")) {
            var first_slider_module = jQuery('.first-module.module_slider');
            first_slider_module.parents('.fw_block').addClass('mt_30');
            first_slider_module.parents('.row').addClass('full_width_row');
        }

        if (fullscreen_slider.size() > 0 || jQuery('.fullwidth_slider').size() > 0) {
            jQuery('#main_header').addClass('mb0');
        }

        if (fullscreen_slider.size() > 0) {
            fullscreen_slider.parent().append('<div class="mouse_icon" />');
        }

        // Mega Menu
        gt3_megamenu();

        // Magnific Popup
        var photozoom_class = jQuery('.photozoom');
        if (photozoom_class.size() > 0) {
            if (photozoom_class.parents('.photo_gallery').hasClass('photo_gallery')) {
                jQuery('.photo_gallery').each(function () {
                    jQuery(this).magnificPopup({
                        delegate: 'a',
                        type: 'image',
                        gallery: {
                            enabled: true
                        },
                        iframe: {
                            markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' + '<div class="mfp-counter"></div>' + '</div>'
                        }
                    });
                });
            } else {
                photozoom_class.magnificPopup({type: 'image'});
            }
        }

        // Subscribe Shortcode
        if (subscribe_module.size() > 0) {
            subscribe_module.find('#submit').wrap('<div class="subscribe_btn" />');
            gt3_subscribe_block();
        }

        // Video Bg
        if (jQuery('.video_bg').size() > 0) {
            gt3_video_bg();
        }

        // Form Allowed Tags
        if (form_tags.size() > 0) {
            form_tags.width(jQuery('#commentform').width() - jQuery('.comment_submit_wrap').width() - 20);
            jQuery('.comment-reply-link').on("click", function () {
                form_tags.width(jQuery('#commentform').width() - jQuery('.comment_submit_wrap').width() - 20);
            });
        }

        // Colored_sections
        if (jQuery('.colored_sections').size() > 0) {
            gt3_colored_section();
        }

        //	Video iframe height
        gt3_video_size();

        // Flip Box
        if (jQuery('.flip_box_section').size() > 0) {
            gt3_flip_box();
        }

        // Info Circle
        if (jQuery('.info_circle').size() > 0) {
            gt3_info_circle();
        }

        // Action Button
        var action_btn = jQuery('.action_button');
        if (action_btn.size() > 0) {
            action_btn.each(function () {
                jQuery(this).find('span').append(jQuery(this).find('a').html());
            });
        }
    });

    jQuery(window).resize(function () {
        gt3_fw_block();

        if (subscribe_module.size() > 0) {
            gt3_subscribe_block();
        }

        // Video Bg
        if (jQuery('.video_bg').size() > 0) {
            gt3_video_bg();
        }

        // Form Allowed Tags
        if (form_tags.size() > 0) {
            form_tags.width(jQuery('#commentform').width() - jQuery('.comment_submit_wrap').width() - 20);
        }

        // Mega Menu
        gt3_megamenu();

        // Colored_sections
        if (jQuery('.colored_sections').size() > 0) {
            gt3_colored_section();
        }

        //	Video iframe height
        gt3_video_size();

        // Flip Box
        if (jQuery('.flip_box_section').size() > 0) {
            gt3_flip_box();
        }

        // Info Circle
        if (jQuery('.info_circle').size() > 0) {
            gt3_info_circle();
        }
    });

    jQuery(window).load(function () {
        // Parallax
        var paralax_section = jQuery('.paralax');
        if (jQuery(window).width() > 1025 && paralax_section.size() > 0) {
            var $window = jQuery(window);
            paralax_section.each(function () {
                var $bgobj = jQuery(this); // assigning the object
                jQuery(window).on('scroll', function () {
                    var yPos = ($bgobj.offset().top - $window.scrollTop()) / 2;
                    var coords = '50% ' + yPos + 'px';
                    $bgobj.css({'background-position': coords});
                });
            });
        }

        if (fullscreen_slider.size() > 0) {
            var loadedtimer = setTimeout(function () {
                fullscreen_slider.parent().addClass('loaded');
                clearTimeout(loadedtimer);
            }, 3000);
        }
    });
})(jQuery);