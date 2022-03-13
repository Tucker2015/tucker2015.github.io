---
sidebar_position: 7
---

# Xcode info.plist Permissions

### Camera and Photo Gallery Permissions

```xml

    <key>NSPhotoLibraryUsageDescription</key>
	<string>This app uses your photo library to store photos.</string>
	<key>NSCameraUsageDescription</key>
	<string>This app uses your photo library to store photos.</string>

```

### Background Task Permissions

```xml

    <key>BGTaskSchedulerPermittedIdentifiers</key>
	<array>
	<string>$(PRODUCT_BUNDLE_IDENTIFIER)</string>
	</array>

```

### Missing Compliance

```xml
	<key>ITSAppUsesNonExemptEncryption</key>
	<false/>
```
