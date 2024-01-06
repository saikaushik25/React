- gitignore - To maintain files and folders that are not required to upload to repo
- packagelock.json - This file make sure that the dependencies that install from package.json always have same version
- package.json - To have a list of dev dependencies and normal dependencies
- node_modules folder can be ignored as it can be generated with npm install command
- browserslist - to say which/what and upto how may versions of browsers should app support
- ~version “Approximately equivalent to version”, will update you to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.

- ^version “Compatible with version”, will update you to all future minor/patch versions, without incrementing the major version. ^1.2.3 will use releases from 1.2.3 to <2.0.0.

# Parcel
- Dev Build
- Local Server
- Image Optimization
- Minification
- Bundling
- HMR = Hot Module Reloading (Reloads web page instantly after changes)
- Diagnostics
- Tree shaking
- File watching algorthm
- content hashing
- content splitting
- Differential Bundling - supporting for old broswers automatically

# Chunking
- Process of splitting components into bundles and we need to import them as lazy and wrap them with Suspense element, otherwisw the component/s fail to render
- Other Names:
 - Code Splitting
 - Dynamic Loading
 - Lazy Loading
 - on demand loading
 - dynamic import
- Advantages:
 - Faster loading
 - Reduced size of initial page
 - Loads components only when require