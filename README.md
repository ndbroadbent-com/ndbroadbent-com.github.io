# Blog

Initial commit was on Thu Jun 9 01:38:13 2016. Hugo version:
https://github.com/gohugoio/hugo/releases/tag/v0.16

This is just a static site with plain HTML/CSS, so we don't need 
to worry about any future updates or security issues.

The theme is fine and it works fine, and I should be able to build the site
for the rest of my life without changing anything. And honestly there's no
need to upgrade anything - it will just break the theme and I'll be doing a lot
of busywork for no reason. So hugo v0.16 is in the ./bin folder. Doesn't need to be updated.
It's just a plain Go CLI program that was compiled many years ago and still works fine.

--------------------------------------------------------------------------------------

🍀 ~/code/go/src/github.com/spf13/hugo [(HEAD detached at v0.16)|2.7.1] $ make docker
docker build -t hugo .
[+] Building 25.0s (6/13)
 => [internal] load build definition from Dockerfile                                                                                                                                                                                                     0.0s
 => => transferring dockerfile: 37B                                                                                                                                                                                                                      0.0s
 => [internal] load .dockerignore                                                                                                                                                                                                                        0.0s
 => => transferring context: 2B                                                                                                                                                                                                                          0.0s
 => [internal] load metadata for docker.io/library/golang:1.6.2                                                                                                                                                                                          0.4s
 => [1/9] FROM docker.io/library/golang:1.6.2@sha256:95875692658d8938644205d5911d655a134b621dd83b94569bd395fb59b08fa9                                                                                                                                   12.1s
 => => resolve docker.io/library/golang:1.6.2@sha256:95875692658d8938644205d5911d655a134b621dd83b94569bd395fb59b08fa9                                                                                                                                    0.0s
 => => extracting sha256:5c90d4a2d1a8dfffd05ff2dd659923f0ca2d843b5e45d030e17abbcd06a11b5b                                                                                                                                                                2.3s
 => => sha256:ab30c63719b10dd434ddbe896879bd9b637fe4e16749a94d3dc827450dc2a437 18.55MB / 18.55MB                                                                                                                                                         0.0s
 => => sha256:c6072700a24252bd71f6c5d2cabf5978ddf324a959b05bad417d8b3789f8df33 42.53MB / 42.53MB                                                                                                                                                         0.0s
 => => sha256:0ffc1204e0abead91aa6678abffa44739455c7b95b96b108eefc2f29d6001fdf 56.92MB / 56.92MB                                                                                                                                                         0.0s
 => => sha256:d8a921df8ce9d2b00d139bc78f0a2036f1960204281570d5794ad0e0c9f32ceb 84.85MB / 84.85MB                                                                                                                                                         0.0s
 => => sha256:d34bc98c277053d749016539968fbde53f0e095713988ccc780505b9c3d37187 122B / 122B                                                                                                                                                               0.0s
 => => sha256:b0850b14d0d144ceecb975d0b296d7630c5c8658054535164c8a5ea55a3fa627 1.35kB / 1.35kB                                                                                                                                                           0.0s
 => => sha256:95875692658d8938644205d5911d655a134b621dd83b94569bd395fb59b08fa9 1.77kB / 1.77kB                                                                                                                                                           0.0s
 => => sha256:5c90d4a2d1a8dfffd05ff2dd659923f0ca2d843b5e45d030e17abbcd06a11b5b 51.35MB / 51.35MB                                                                                                                                                         0.0s
 => => extracting sha256:ab30c63719b10dd434ddbe896879bd9b637fe4e16749a94d3dc827450dc2a437                                                                                                                                                                0.7s
 => => extracting sha256:c6072700a24252bd71f6c5d2cabf5978ddf324a959b05bad417d8b3789f8df33                                                                                                                                                                2.1s
 => => extracting sha256:0ffc1204e0abead91aa6678abffa44739455c7b95b96b108eefc2f29d6001fdf                                                                                                                                                                1.8s
 => => extracting sha256:d8a921df8ce9d2b00d139bc78f0a2036f1960204281570d5794ad0e0c9f32ceb                                                                                                                                                                4.1s
 => => extracting sha256:d34bc98c277053d749016539968fbde53f0e095713988ccc780505b9c3d37187                                                                                                                                                                0.0s
 => => extracting sha256:b0850b14d0d144ceecb975d0b296d7630c5c8658054535164c8a5ea55a3fa627                                                                                                                                                                0.0s
 => [internal] load build context                                                                                                                                                                                                                        0.0s
 => => transferring context: 37.63kB                                                                                                                                                                                                                     0.0s
 => ERROR [2/9] RUN go get github.com/stretchr/testify/assert  && go get github.com/kyokomi/emoji  && go get github.com/bep/inflect  && go get github.com/BurntSushi/toml  && go get github.com/PuerkitoBio/purell  && go get github.com/opennota/urle  12.4s
------
 > [2/9] RUN go get github.com/stretchr/testify/assert  && go get github.com/kyokomi/emoji      && go get github.com/bep/inflect        && go get github.com/BurntSushi/toml    && go get github.com/PuerkitoBio/purell         && go get github.com/opennota/urlesc  && go get github.com/dchest/cssmin      && go get github.com/eknkc/amber        && go get github.com/gorilla/websocket  && go get github.com/kardianos/osext    && go get github.com/miekg/mmark        && go get github.com/mitchellh/mapstructure  && go get github.com/russross/blackfriday        && go get github.com/shurcooL/sanitized_anchor_name     && go get github.com/spf13/afero        && go get github.com/spf13/cast         && go get github.com/spf13/jwalterweatherman    && go get github.com/spf13/cobra      && go get github.com/cpuguy83/go-md2man         && go get github.com/inconshreveable/mousetrap  && go get github.com/spf13/pflag        && go get github.com/spf13/fsync        && go get github.com/spf13/viper        && go get github.com/kr/pretty        && go get github.com/kr/text    && go get github.com/magiconair/properties      && go get golang.org/x/text/transform   && go get golang.org/x/text/unicode/norm        && go get github.com/yosssi/ace         && go get github.com/spf13/nitro 	&& go get github.com/fsnotify/fsnotify:
#5 11.27 # github.com/stretchr/testify/assert
#5 11.27 src/github.com/stretchr/testify/assert/assertions.go:1725: undefined: errors.Is
#5 11.27 src/github.com/stretchr/testify/assert/assertions.go:1748: undefined: errors.Is
#5 11.27 src/github.com/stretchr/testify/assert/assertions.go:1771: undefined: errors.As
#5 11.27 src/github.com/stretchr/testify/assert/assertions.go:1788: undefined: errors.Unwrap
#5 11.27 src/github.com/stretchr/testify/assert/assertions.go:1792: undefined: errors.Unwrap
------
executor failed running [/bin/sh -c go get github.com/stretchr/testify/assert 	&& go get github.com/kyokomi/emoji 	&& go get github.com/bep/inflect 	&& go get github.com/BurntSushi/toml 	&& go get github.com/PuerkitoBio/purell 	&& go get github.com/opennota/urlesc 	&& go get github.com/dchest/cssmin 	&& go get github.com/eknkc/amber 	&& go get github.com/gorilla/websocket 	&& go get github.com/kardianos/osext 	&& go get github.com/miekg/mmark 	&& go get github.com/mitchellh/mapstructure 	&& go get github.com/russross/blackfriday 	&& go get github.com/shurcooL/sanitized_anchor_name 	&& go get github.com/spf13/afero 	&& go get github.com/spf13/cast 	&& go get github.com/spf13/jwalterweatherman && go get github.com/spf13/cobra 	&& go get github.com/cpuguy83/go-md2man 	&& go get github.com/inconshreveable/mousetrap 	&& go get github.com/spf13/pflag 	&& go get github.com/spf13/fsync 	&& go get github.com/spf13/viper 	&& go get github.com/kr/pretty 	&& go get github.com/kr/text 	&& go get github.com/magiconair/properties 	&& go get golang.org/x/text/transform 	&& go get golang.org/x/text/unicode/norm 	&& go get github.com/yosssi/ace 	&& go get github.com/spf13/nitro 	&& go get github.com/fsnotify/fsnotify]: exit code: 2
make: *** [docker] Error 1
