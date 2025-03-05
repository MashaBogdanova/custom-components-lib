import * as path from "path";
import {fileURLToPath} from "url";

export default () => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)

  return {
    entry: "./src/index.ts",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index.js",
      library: {
        name: 'CustomComponentsLib',
        type: 'umd',
      },
      globalObject: "this",
      clean: true,
    },
    externals: {
      react: "react",
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        }
      ],
    },
    mode: "development",
  }
}
