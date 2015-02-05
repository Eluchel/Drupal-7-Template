<?php
/**
 * BYU theme page to generate the markup for a single page.
 */
 
 global $base_url;
?>
<header id="main-header" role="banner">
	<div id="header-top" class="wrapper">
	
		<div id="logo">
		<?php if (theme_get_setting('primary_secondary') == 'Secondary'): ?>
			<h2>
				<a href="#" class="byulink">Brigham Young University</a>
				<a href="<?php echo theme_get_setting('parent_org_link') ?>" class="parentlink"><?php echo theme_get_setting('parent_org') ?></a>
			</h2>
		<?php else: ?>
			<h2><a class="byu" href="http://www.byu.edu/">Brigham Young University</a></h2>
		<?php endif ?>
		</div>
		
		<?php if ($site_name): ?>
			<h1>
				<a href="<?php print $front_page; ?>" id="site-name" title="<?php print t('Home'); ?>" rel="home"><?php print $site_name; ?></a>
			</h1>
		<?php endif; ?>

		<?php if (module_exists('cas')): ?>
			<?php if (user_is_logged_in()): ?>
				<a href="caslogout" class="sign-in button">Sign Out</a>
			<?php else: ?>
				<a href="cas" class="sign-in button">Sign in</a>
			<?php endif; ?>
		<?php else: ?>
			<?php if (user_is_logged_in()): ?>
				<a href="logout" class="sign-in button">Sign out</a>
			<?php else: ?>
				<a href="user" class="sign-in button">Sign in</a>
			<?php endif; ?>			
		<?php endif; ?>
		
	</div>
</header>

<div id="search-menu">	
	<div id="search-container" role="search">	
		<?php print render($search_box) ?>
	</div>
	<a href="#primary-nav" class="menu-button">Menu</a>  
</div>
	
<div class="nav-container">
		<nav id="primary-nav" role="navigation">	
			<?php
				if ($main_menu):
					if (module_exists('byu_megamenu')) {
						print _renderMainMenu();
					} else {
						print drupal_render(menu_tree(variable_get('menu_main_links_source', 'main-menu')));
					}
				endif; 
			?>
		</nav>
		
		<nav id="secondary-nav" role="navigation">
			<?php if ($secondary_menu):
				print drupal_render(menu_tree(variable_get('menu_secondary_links_source', 'secondary-menu')));	
			endif; ?>
		</nav>
</div>

<?php 
// Render the sidebars to see if there's anything in them.
$sidebar_left  = render($page['sidebar_left']);
$sidebar_right = render($page['sidebar_right']);
?>

<div id="content" class="wrapper clearfix <?php print ($sidebar_left && $sidebar_right ? 'two-sidebars' : ($sidebar_left || $sidebar_right ? 'one-sidebar' : '')) ?>" role="main">
	<?php print render($page['highlighted']); ?>
	<?php print render($page['feature']); ?> 
	<?php print $breadcrumb; ?>

	<?php print render($title_prefix); ?>
	<?php if ($title): ?>
	  <h1 class="title" id="page-title"><?php print $title; ?></h1>
	<?php endif; ?>
	<?php print render($title_suffix); ?>
	<?php print $messages; ?>
	<?php print render($tabs); ?>
	<?php print render($page['help']); ?>
	<?php if ($action_links): ?>
		<ul class="action-links"><?php print render($action_links); ?></ul>
	<?php endif; ?>
	
	 <?php if ($sidebar_left): ?>
		<aside class="sidebar">
			<?php print $sidebar_left; ?>
		</aside><!-- /.sidebars -->
    <?php endif; ?>
	
	<div id="main-content">
		<?php print render($page['content']); ?> 
	</div>
	  
	<?php if ($sidebar_right): ?>
		<aside class="sidebar">
			<?php print $sidebar_right; ?>
		</aside><!-- /.sidebars -->
	<?php endif; ?>
      
</div>

<footer id="page-footer" role="contentinfo">
	<?php if($page['footer-column1'] || $page['footer-column2'] || $page['footer-column3'] || $page['footer-column4'] || $page['footer-column5']): ?>
	<div id="footer-links">
			<div class="wrapper"> 	
				<?php if($page['footer-column1']): ?>
					<div class="col">
					<?php print render($page['footer-column1']); ?>
					</div>
				<?php endif; ?>
				
				<?php if($page['footer-column2']): ?>
					<div class="col">
					<?php print render($page['footer-column2']); ?>
					</div>
				<?php endif; ?>
				
				<?php if($page['footer-column3']): ?>
					<div class="col">
					<?php print render($page['footer-column3']); ?>
					</div>
				<?php endif; ?>
				
				<?php if($page['footer-column4']): ?>
					<div class="col">
					<?php print render($page['footer-column4']); ?>
					</div>
				<?php endif; ?>
				
				<?php if($page['footer-column5']): ?>
					<div class="col omega">
					<?php print render($page['footer-column5']); ?>
					</div>
				<?php endif; ?>

			</div>	
	</div>
	<?php endif; ?>
	
  <div id="footer-bottom">
			<div class="wrapper clearfix">
			<?php print render($page['footer-bottom']); ?>
			<?php 
			if (!render($page['copyright'])): //If there is no specific content in the copyright area, display default ?> 
				<a id="lds"   href="http://lds.org/">The Church of Jesus Christ of Latter-day Saints</a>
				<p>
					<a id="byui"  href="http://byui.edu/">BYU-Idaho</a>
					<a id="byuh"  href="http://byuh.edu/">BYU-Hawaii</a>
					<a id="ldsbc" href="http://www.ldsbc.edu/">LDS Business College</a> 
				</p>
			<?php else: 
				print render($page['copyright']);
			endif; ?>
			</div>
		</div>
   
</footer>
<?php print render($page['bottom']); ?>