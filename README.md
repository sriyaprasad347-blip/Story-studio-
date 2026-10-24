# My AI Story Studio – phone-only setup
1. Download all files from Claude to your phone (index.html, manifest.webmanifest, sw.js, icon-192.png, icon-512.png; worker.js and README.md are optional).
2. In Chrome open github.com, create a free account, tap + > New repository, name it `story-studio`, set Public, Create.
3. Tap "uploading an existing file", pick the downloaded files, then Commit changes.
4. Repository > Settings > Pages > Source: "Deploy from a branch", branch `main`, folder `/ (root)` > Save.
5. After ~1 minute open https://YOUR-USERNAME.github.io/story-studio/ . In Chrome tap ⋮ > "Install app" / "Add to Home screen".
6. Later, to connect AI: put keys ONLY in a Cloudflare Worker (worker.js, secret `API_KEY`), then set `API_BASE` in index.html to the Worker URL.
Data is stored on your phone only (browser storage). Use Library > Export to back up.
