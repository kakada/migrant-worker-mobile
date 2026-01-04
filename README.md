# migrant-worker-mobile
An Android application for migrants who intend to work outside Cambodia. The content is in Khmer.

## Getting Started

### Prerequisites
- Make sure your environment is set up to run React Native applications. Follow the [React Native](https://reactnative.dev/docs/environment-setup) instructions for getting started.
- Apps using Realm.
- **React Native 0.81.5** (upgraded from 0.62.0)
- **Node version 20.19.4 or later** (required by React Native 0.81.5)
- **Java 17 or later** (required for Android Gradle Plugin 8.2.2)
- **Android SDK API 35** (Android 14)
- [Firebase console](https://console.firebase.google.com) account and add firebase to app(Android)

### System Requirements
- **Minimum Android SDK**: API 26 (Android 8.0)
- **Target Android SDK**: API 35 (Android 14)
- **Compile Android SDK**: API 35 (Android 14)

#### Clone repo
```bash
git clone https://github.com/kakada/migrant-worker-mobile.git
```

#### Firebase Analytic google-services.json
- Create [Firebase Console Account](https://firebase.google.com/)
- Create a project
- Add Android app to the project
- Download google-services.json
- Place the file to ```migrant-worker-mobile/android/app/google-services.json```
- **Important**: You can read more on [react-native-firebase](https://rnfirebase.io/) and [Analytics](https://rnfirebase.io/analytics/usage)

#### Install Dependencies
- Go to the repository
```bash
cd migrant-worker-mobile
```
- Install dependencies (use --legacy-peer-deps flag for compatibility)
```bash
npm install --legacy-peer-deps
```

#### Run the application
- To start the Metro bundler
```bash
npm start
```
- To run on Android (in a separate terminal)
```bash
npm run android
# or
npx react-native run-android
```

#### Build for Release
- If no keystore exists, create a new one, or use the existing keystore and follow
[Build for release](https://reactnative.dev/docs/signed-apk-android)

## Technology Stack

### Core
- **React Native**: 0.81.5
- **React**: 19.1.0

### Navigation
- @react-navigation/native: 6.1.18
- @react-navigation/stack: 6.4.1

### Database
- Realm: 12.15.0

### Analytics & Monitoring
- @react-native-firebase/app: 18.9.0
- @react-native-firebase/analytics: 18.9.0
- @sentry/react-native: 5.33.1

### UI Libraries
- react-native-reanimated: 3.16.5
- react-native-gesture-handler: 2.22.0
- react-native-screens: 3.35.0
- react-native-safe-area-context: 4.12.0
- react-native-vector-icons: 10.2.0

## Development

### Build Commands
```bash
# Clean build
cd android && ./gradlew clean

# Debug build
cd android && ./gradlew assembleDebug

# Release build
cd android && ./gradlew assembleRelease
```

### Running Tests
```bash
npm test
```

### Linting
```bash
npm run lint
```

## Recent Upgrades

### React Native 0.81.5 Upgrade (2026)
- Upgraded from React Native 0.62.0 to 0.81.5
- Upgraded Android support from API 28 to API 35
- Updated all major dependencies to latest compatible versions
- Migrated to new React Native plugin-based build system
- Enabled Hermes JS engine by default
- For full upgrade details, see PR #[number]

## Known Issues

1. **react-native-queue**: Uses an older version of Realm. Requires `--ignore-scripts` flag during installation.
2. **ESLint/Prettier**: Compatibility issue between versions. Linting may require additional configuration.

## Troubleshooting

### Build Failures
If you encounter build failures:
1. Clean the build: `cd android && ./gradlew clean`
2. Delete node_modules: `rm -rf node_modules && npm install --legacy-peer-deps`
3. Clear Metro cache: `npx react-native start --reset-cache`

### Android Build Issues
- Ensure you have Java 17 or later installed
- Verify Android SDK API 35 is installed
- Check that ANDROID_HOME environment variable is set correctly
