let
  mozillaOverlayUrl = https://github.com/mozilla/nixpkgs-mozilla/archive/master.tar.gz;
  mozillaOverlay = import (builtins.fetchTarball mozillaOverlayUrl);
  pkgs = import <nixpkgs> { overlays = [ mozillaOverlay ]; };
in with pkgs; stdenv.mkDerivation {
  name = "phonotek";
  #src = ./.;
  buildInputs = [ latest.rustChannels.nightly.rust glfw ];
  NODE_GLFW_DYLIB_PATH = "${glfw.outPath}/lib/libglfw.so.3";
  RUST_BACKTRACE = "full";
  shellHook = ''
    export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:`dirname $NODE_GLFW_DYLIB_PATH`
  '';
}
