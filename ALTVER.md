---
title: Alternative Versioning
---

<div class="summary">

![ALTVER summary](./public/assets/altver.png#gh-light-mode-only)
![ALTVER summary](./public/assets/altver-dark.png#gh-dark-mode-only)

## Summary

The version number is composed of three parts: BRAND, NEW, and CARE.

Increment BRAND when you make something extraordinary, usually with breaking changes. Increment NEW
when you add exciting new functionalities (including breaking change with an easy upgrade path). Increment
CARE version when you make backward compatible bug fixes and improvements

Just like SemVer, additional labels for pre-release and build metadata are available as extensions.

</div>

## Motivation

After over a decade of using and maintaining open source, I've come to believe SerVer made everybody terrified of new Major version.

In one hand, most libraries users lock their dependencies manager to the latest minor version. So the latest released right before the next major.

On the other hand, most maintainer are hesitant to tag a major version because they know it partitions the community.

In the wild, many projects are actually versioned with AltVer without naming it. The maintainers often balance the pro and cons and choose to add something that someone else would consider “a breaking change” into a minor or patch version.

### What’s a breaking change?

When I discovered SemVer, I thought this was very scientific and it’s obvious to everyone what a breaking change is and how it’s completely different from a bug fix. Unfortunately, it’s a lot more subtle than that.

**Example**

Let’s say you have a function `get_discout_rate()` that returns a discount rate. The function returns a number between 0 and 100 such as 30% discount returns `30`. Now, imagine you made a mistake and a 30% discount returns `70`. The same way, a 5% discount returns `95`. Instead of returning the discount, you return the “rest to pay”.

Users start building on this function and automatically turn `70` into a nice “30%” label.

How do you fix it?

Existing users will see it as a breaking change because they rely on this behavior. New users will see it as a bug, I mean the function clearly states that it returns a discount rate!

**People consider things to be a bugfix or breaking change depending on how it affects them.**

As a maintainer, you’ll need to consider how critical is the feature, how new it is, how heavily it’s used to figure if it’s worth releasing a new Major for this, knowing all the implications of a new major.

I chose this example because it happened to me in 2014 but this is a story for another time.


## Specification

Any new BRAND version must be exciting! The upgrade might require some extra work so people must want to do it.
 
NEW version usually include important new feature, something visible, like setting you want to enable.

New CARE version include bug fixes, performance improvements, and new features that are not as visible.

As the project matures, BRAND probably reach the end and won't be updated again, NEW become more and more rare while CARE is the most common.

## Recommendations

### Version requirements

People are encouraged to use the same version requirement, usually _“all new versions until next BRAND”_.

If you’re too afraid of breaking changes in NEW version and don’t have a good test coverage yet, you should at least update to latest CARE version automatically.

Examples with NPM:

```json
{
  "dependencies": {
    "my-lib": "^4.7.9"
  }
}
```

Example with Composer:

```json
{
  "require": {
    "my-lib": "^4.7.9"
  }
}
```

Example with Bundler:

```ruby
gem 'my-lib', '~> 4.7'
```

---

## FAQ

#### Why use three main parts X.Y.Z?

SemVer has become The One True Way™ to version software for a lot of people. We're very used to seeing versions with three parts, so it’s easier for everybody to keep them. In most cases, people won’t notice a package is following AltVer or SerVer.

#### What are the numbering syntax differences between SemVer and AltVer?

Technically none! AltVer is an alternative interpretation of the version numbers. By simply looking at a SerVer or an AltVer version number, there is no way to tell them apart. The same [Backus–Naur Form Grammar](https://semver.org/#backusnaur-form-grammar-for-valid-semver-versions) can be used.
