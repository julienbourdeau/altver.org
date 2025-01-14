---
title: Alternative Versioning
seo_title: Alternative Versioning, a relaxed alternative to SemVer
description: "Alternative Versioning is a different approach to the almighty Semantic Versioning: more relaxed, more trustful."
url: "https://altver.org/"
image: "https://altver.org/assets/altver-og-image.png"
---

<div class="summary">

![ALTVER summary](./public/assets/altver.png#gh-light-mode-only)
![ALTVER summary](./public/assets/altver-dark.png#gh-dark-mode-only)

## Summary

The version number is composed of three parts: BRAND, NEW, and CARE.

Increment BRAND when you make something extraordinary, usually with breaking changes. Increment NEW
when you add exciting new functionalities (including breaking change with an easy upgrade path). Increment
CARE version when you make backward compatible bug fixes and improvements

_Basically, AltVer is like SemVer with small breaking change in minor versions._

Just like SemVer, additional labels for pre-release and build metadata are available as extensions.

</div>

## Motivation

After over a decade of using and maintaining open source, I've come to believe SerVer made everybody terrified of new Major versions._

In one hand, most libraries users lock their dependencies manager to the latest minor version (ie: the latest released right before the next major).

On the other hand, most maintainer are hesitant to tag a major version because it will partition the community.

In the wild, _many projects are actually versioned with AltVer without naming it. Maintainers often balance the pro and cons for each changes_ and might introduce “a breaking change” in a minor (or patch) version.

### Understanding What a breaking change is

When I discovered SemVer, I thought this was very scientific and everyone always agrees on what a breaking change is. Unfortunately, it’s a lot more subtle than that.

**Example**

Let’s say you have a function `get_discout_rate()` that returns a discount rate. The function returns a number between 0 and 100 such as 30% discount returns `30`. Now, imagine you made a mistake and a 30% discount returns `70`. The same way, a 5% discount returns `95`. Instead of returning the discount, you return the “rest to pay”.

Users start building on this function and automatically turn `70` into a nice “30%” label.

How do you fix it?

Existing users will see it as a breaking change because they rely on this behavior. Their discount label are suddenly all wrong. New users will see it as a bug, I mean the function clearly states that it returns a discount rate!

_People consider things to be a bug fix or breaking change depending on how it affects them._

I chose this example because it happened to me in 2014 but this is a story for another time.

### The consequences of a Breaking Change

Whenever a breaking change is released, you’d increased the Major version number. Major version are well named **MAJOR** means it’s important and significant, so it should be rare

#### Delayed release

As a user, you don’t expect a major version every few weeks. So the breaking change are bundled and the fix is delayed. Instead of getting an important fix now, you’ll get it “next time”.

One solution is sometimes to run a fork of the dependency until the next release, 

#### Partitioning user base

Most users upgrade to the latest minors but won’t update often to next major (unless you’re an important part of the stack). If you a small dependency, users won’t upgrade until they need too. It’s fine! But now as a maintainer you have users using multiple major version (sending reports, feature requests and so on).


## Trust the maintainer

Maintainers is always responsible for what gets into the release. They will way carefully weigh if something needs to fixed with or without breaking changes, when it should be release, and what the version type should be.

Maintainers need to keep things manageable for them so you get new features and bug fixes.

Maintainers will always avoid breaking things and upsetting the people trusting them with their code.

Mistakes happen. It happens to all of us but generally, you should trust the maintainer.

_AltVer is a statement that maintainers will do their best to balance all the project stakes. Trust the maintainer._


## Specification

Any new BRAND version must be exciting! The upgrade might require some extra work so people must want to do it.
 
NEW version usually include important new feature, something visible, like setting you want to enable.

New CARE version include bug fixes, performance improvements, and new features that are not as visible.

As the project matures, BRAND probably reach the end and won't be updated again, NEW become more and more rare while CARE is the most common.

### NEW or PATCH ?

Fixing a bug? Should be PATCH.

Adding a small insignificant feature? Should be PATCH.

Adding a really cool feature? Should be NEW

Introducing a breaking change? Should NEVER be PATCH.

Judging the coolness of a feature is very subjective but typically, it’s something that has been anticipated. _If users keep requesting this feature it’s definitely a NEW._ Again, as a maintainer, you know.

### BRAND or NEW ?

When there is a new feature and it’s breaking, should it be a BRAND or a NEW version? The maintainer will take into consideration many things to decide:

* How likely the users are going to be affected.
* How hard it is to upgrade.
* How much it’s gonna partition the community.

It it breaks everything but all the users have to do is change a key configuration, it might be fine. If the upgrade is harder but it most likely affects nobody because it’s not the way things were supposed to be used, it might be fine too.

_Maintains might have different opinions on each situation but it’s already like that with SemVer._ AltVer just makes it explicit.

BRAND is also used when maintainers are bundling a lot of cool feature and they want to draw more attention to a version. BRAND don’t have to be breaking but they often are.

### Recommended version requirements for users

Users are encouraged to set their version requirement to “latest version until next BRAND”, which is typically what we do for SerVer.

If don’t have a enough test coverage yet, you should at least update to latest CARE version automatically.

<details>
<summary>Examples with NPM</summary>

```json
{
  "dependencies": {
    "my-lib": "^4.7.9"
  }
}
```
</details>

<details>
<summary>Example with Composer</summary>

```json
{
  "require": {
    "my-lib": "^4.7.9"
  }
}
```
</details>

<details>

<summary>Example with Bundler</summary>

```ruby
gem 'my-lib', '~> 4.7'
```
</details>


---

## FAQ

#### Why use three main parts X.Y.Z?

SemVer has become The One True Way™ to version software for a lot of people. We're very used to seeing versions with three parts, so it’s easier for everybody to keep them. In most cases, people won’t notice a package is following AltVer or SerVer.

#### What are the numbering syntax differences between SemVer and AltVer?

Technically none! AltVer is an alternative interpretation of the version numbers. By simply looking at a SerVer or an AltVer version number, there is no way to tell them apart. The same [Backus–Naur Form Grammar](https://semver.org/#backusnaur-form-grammar-for-valid-semver-versions) can be used.
