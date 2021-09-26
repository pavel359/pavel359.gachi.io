const esbuild = require('rollup-plugin-esbuild');
const rollup = require('rollup');
const analyze = require('rollup-plugin-analyzer');
const resolve = require('rollup-plugin-node-resolve');

// see below for details on the options
//TODO: link watcher with browser
const inputOptions = {
  input: 'src/startPage/StartPage.js',
  plugins: [
    analyze(),
    esbuild({
      // All options are optional
      exclude: /node_modules/, // default
      // entryPoints:['src/app.js'],
      sourceMap: true, // default
      bundle: true,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2017', // default, or 'es20XX', 'esnext'
      // Like @rollup/plugin-replace
      define: {
        __VERSION__: '"0.0.1"',
      },
      // Add extra loaders
      loaders: {
        // Add .json files support
        // require @rollup/plugin-commonjs
        '.json': 'json',
      },
      // outfile:"dist/bundle.js"
    }),
    resolve(),
  ],
};
const outputOptions = {
  dir: 'dist',
  format: 'iife',
  name: 'app',
};

async function build() {
  // create a bundle
  const bundle = await rollup.rollup(inputOptions);

  console.log(bundle.watchFiles); // an array of file names this bundle depends on

  // generate output specific code in-memory
  // you can call this function multiple times on the same bundle object
  const { output } = await bundle.generate(outputOptions);

  for (const chunkOrAsset of output) {
    if (chunkOrAsset.type === 'asset') {
      // For assets, this contains
      // {
      //   fileName: string,              // the asset file name
      //   source: string | Uint8Array    // the asset source
      //   type: 'asset'                  // signifies that this is an asset
      // }
      console.log('Asset', chunkOrAsset);
    } else {
      // For chunks, this contains
      // {
      //   code: string,                  // the generated JS code
      //   dynamicImports: string[],      // external modules imported dynamically by the chunk
      //   exports: string[],             // exported variable names
      //   facadeModuleId: string | null, // the id of a module that this chunk corresponds to
      //   fileName: string,              // the chunk file name
      //   implicitlyLoadedBefore: string[]; // entries that should only be loaded after this chunk
      //   imports: string[],             // external modules imported statically by the chunk
      //   importedBindings: {[imported: string]: string[]} // imported bindings per dependency
      //   isDynamicEntry: boolean,       // is this chunk a dynamic entry point
      //   isEntry: boolean,              // is this chunk a static entry point
      //   isImplicitEntry: boolean,      // should this chunk only be loaded after other chunks
      //   map: string | null,            // sourcemaps if present
      //   modules: {                     // information about the modules in this chunk
      //     [id: string]: {
      //       renderedExports: string[]; // exported variable names that were included
      //       removedExports: string[];  // exported variable names that were removed
      //       renderedLength: number;    // the length of the remaining code in this module
      //       originalLength: number;    // the original length of the code in this module
      //     };
      //   },
      //   name: string                   // the name of this chunk as used in naming patterns
      //   referencedFiles: string[]      // files referenced via import.meta.ROLLUP_FILE_URL_<id>
      //   type: 'chunk',                 // signifies that this is a chunk
      // }
      console.log('Chunk', chunkOrAsset.modules);
    }
  }

  // or write the bundle to disk
  await bundle.write(outputOptions);

  if (process.env.NODE_ENV === 'development') {
    rollup.watch({
      ...inputOptions,
      output: outputOptions,
    });
  }

  // closes the bundle
  await bundle.close();
}

build();
