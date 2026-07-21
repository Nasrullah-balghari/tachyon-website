import { Icon } from "@/lib/icons";
import { PAL, PAL_DARK } from "@/lib/theme";
import styles from "./IconTile.module.css";

/**
 * Colored square tile + white stroke icon. Background cycles through the
 * palette by index so adjacent cards differ, matching the design.
 *
 * Sizing is passed per-instance (the design uses 42–64px tiles depending on
 * section), so those few values stay as a style prop — everything else is CSS.
 */
export default function IconTile({
  name,
  index = 0,
  size = 56,
  radius = 14,
  iconSize = 28,
  dark = false,
  bg,
}: {
  name: string;
  index?: number;
  size?: number;
  radius?: number;
  iconSize?: number;
  dark?: boolean;
  /** Explicit tile colour. Some sections pin a colour per card instead of
      cycling the palette — pass it here and `index` is ignored. */
  bg?: string;
}) {
  const pal = dark ? PAL_DARK : PAL;
  return (
    <div
      className={styles.tile}
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        background: bg ?? pal[index % pal.length],
      }}
    >
      <Icon name={name} size={iconSize} />
    </div>
  );
}
