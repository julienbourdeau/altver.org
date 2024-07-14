---
title: Alternative Versioning
---

## Summary

Given a version number `BRAND.NEW.CARE`, increment the:

`BRAND`: version when you make something extraordinary, usually with breaking changes <br>
`NEW` version when you add exiting new functionalities, with an easy upgrade path <br>
`CARE` version when you make backward compatible bug fixes and improvements <br>

Just like SemVer, additional labels for pre-release and build metadata are available as extensions.

## Motivation

After a decade of using and maintaining open source, I've come to realized that SemVer isn't perfect. 
People are scared of major upgrades because they are going to break. Maintainer are hesitant to tag a major 
version when they introduce breaking change because they know a large part of the user base will fall behind.

In the wild, many projects are actually versioned with AltVer without knowing it.



## Specification

Any new BRAND version must be exciting! The upgrade might require some extra work so people must want to do it.
 
NEW version usually include important new feature, something visible, like setting you want to enable.

New CARE version include bug fixes, performance improvements, and new features that are not as visible.

As the project matures, BRAND probably reach the end and won't be updated again, NEW become more and more rare while CARE is the most common.

## Version restriction for package manager

Because AltVer is a superset of SemVer, I recommend using the same restrictions.
Ideally, you want update to next NEW version automatically. If a lib is very sensitive or if you test coverage isn't great yet, you should at least update to latest CARE version automatically.

Examples with NPM:

```json
{
  "dependencies": {
    "my-lib": "^1.0.0"
  }
}
```

Example with Composer:

```json
{
  "require": {
    "my-lib": "^1.0.0"
  }
}
```

Example with Bundler:

```ruby
gem 'my-lib', '~> 1.0'
```


## FAQ

### What are the numbering syntax differences between SemVer and AltVer?

None! AltVer is a superset of SemVer, it's just a different way to interpret the version numbers. When looking at a
version number using AltVer, there is no way to tell it apart from SemVer.

The same [Backus–Naur Form Grammar](https://semver.org/#backusnaur-form-grammar-for-valid-semver-versions) can be used.
