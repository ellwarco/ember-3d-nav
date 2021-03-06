# Ember-3d-nav

<a href="http://shipshape.io/"><img src="http://i.imgur.com/EVjM7AV.png" width="100" height="100"/></a>

[![Join the chat at https://gitter.im/shipshapecode/ember-3d-nav](https://badges.gitter.im/shipshapecode/ember-3d-nav.svg)](https://gitter.im/shipshapecode/ember-3d-nav?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![npm version](https://badge.fury.io/js/ember-3d-nav.svg)](http://badge.fury.io/js/ember-3d-nav)
[![npm](https://img.shields.io/npm/dm/ember-3d-nav.svg)]()
[![Ember Observer Score](http://emberobserver.com/badges/ember-3d-nav.svg)](http://emberobserver.com/addons/ember-3d-nav)
[![Build Status](https://travis-ci.org/shipshapecode/ember-3d-nav.svg?branch=master)](https://travis-ci.org/shipshapecode/ember-3d-nav)
[![Code Climate](https://codeclimate.com/github/shipshapecode/ember-3d-nav/badges/gpa.svg)](https://codeclimate.com/github/shipshapecode/ember-3d-nav)
[![Test Coverage](https://codeclimate.com/github/shipshapecode/ember-3d-nav/badges/coverage.svg)](https://codeclimate.com/github/shipshapecode/ember-3d-nav/coverage)

Ember-3d-nav is based on [3D Rotating Navigation](https://codyhouse.co/gem/3d-rotating-navigation/) by CodyHouse. It aims to make it easily configurable for use with your Ember apps.

## Looking for contributors!
This is currently **beta**, but if you'd like to help out and contribute please let me know!

[![Demo](http://i.imgur.com/408RMvv.gif)](http://shipshapecode.github.io/ember-3d-nav/)
[http://shipshapecode.github.io/ember-3d-nav/](http://shipshapecode.github.io/ember-3d-nav/)

## Installation

`ember install ember-3d-nav`

## Usage

To make the nav work, you must provide a `nav-trigger-container`, `nav-container`, and at least one `nav-item` inside the `nav-container`.

This is the configuration used in the sample app in tests/dummy:

```hbs
{{#nav-trigger-container isFixed=true}}
  <a href="//shipshape.io" class="cd-logo"><img src="img/ShipShapeIcon.svg" alt="Logo"></a>
{{/nav-trigger-container}}

<main>
  <div class="info-text">
    <h1>Ember-3D-Nav</h1>
    <p>
      This Ember addon is based on the amazing work done by CodyHouse on
      <a href="https://codyhouse.co/gem/3d-rotating-navigation/">3D Rotating Navigation</a>.
      Some changes have been made to convert things into Ember components and try to make it reusable,
      but a lot of the original styles have stayed.
    </p>
  </div>
</main>

{{#nav-container multiColor=true}}
  {{#each model.links as |link index|}}
    {{nav-item index=index link=link}}
  {{/each}}
{{/nav-container}}
```

## Options

Each component takes various options, some of which are required.

`index (required)`

Each `nav-item` must have an `index`, which is an integer, passed in. This allows the selectedIndex to be calculated.

`isFixed (optional)`

`nav-trigger-container` accepts a parameter `isFixed`, which is a boolean. If you set `isFixed` to true, the header will become fixed, so it will be visible regardless of where you scroll on the page.

- Note: when `isFixed` is set to true, a scroll event listener is applied to the window. This will set a class of `is-fixed-and-scrolled` to true whenever the window has been scrolled down. This allows for setting the background color of the navbar to another color, if you want, so that it is easier to see when fixed and scrolled over the page content.

`multiColor (optional)`

`nav-container` accepts a parameter `multiColor`, which is a boolean. You can set `multiColor` to true, which will enable class names like `color-1`, `color-2`, `color-3` etc. on the nav-marker, so you can specify different colors for the indicator.

You currently must define your links in an array, so we can easily determine the selected index. Each item must have a `type`, `text` and `href` or `linkTo`. Please see the following example:

```js
links: Ember.A([
        //linkTo type
        {
          linkTo: 'home',
          text: 'Home',
          type: 'linkTo'
        },
        {
          linkTo: 'technologies',
          text: 'Technologies',
          type: 'linkTo'
        },
        {
          linkTo: 'team',
          text: 'Team',
          type: 'linkTo'
        },
        {
          linkTo: 'portfolio',
          text: 'Portfolio',
          type: 'linkTo'
        },
        {
          linkTo: 'contact',
          text: 'Contact',
          type: 'linkTo'
        },
        //href type
        {
          href: '#0',
          text: 'About',
          type: 'href'
        },
        {
          href: '#1',
          text: 'Technologies',
          type: 'href'
        },
        {
          href: 'team/#2',
          text: 'Team',
          type: 'href'
        },
        {
          href: '/portfolio/#3',
          text: 'Portfolio',
          type: 'href'
        },
        {
          href: '#4',
          text: 'Contact',
          type: 'href'
        }
      ])
```

## Styles

Ember-3d-nav uses Sass for styles. You can override any variable you find in the `globals/_variables.scss` partial to adjust the styles of your navigation.

`$n-nav-items`

Be sure to update this Sass variable to the number of items in your navigation. By default `$n-nav-items` is set to `5`. This setting will automatically update the width of each item based on what you specify here.

Here is an example of some overrides:

```scss
// app.scss

// You can override the styles by setting variables
// You can reference globals/_variables.scss for more overridable options:
$c-text-color: #F5F0E1; // cream
$c-body-bg: #82B4BC; // light blue
$c-is-fixed-color: #354952; //dark blue

// Be sure to set the number of nav items you have
$n-nav-items: 4; // Default is 5;
```

Lastly, be sure to `@import` the styles into your project.

```scss
@import 'ember-3d-nav';
```
