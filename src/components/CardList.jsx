import FeatCard from "./FeatCard";

export default function CardList() {
    return(
        <main className="card-grid">
            <FeatCard icon="💡" title="Instant Server Start" text="On demand file serving over native ESM, no bundling required"/>
            <FeatCard icon="⚡" title="Lightning Fast HMR" text="Hot Module Replacement (HMR) that stays fast regardless of app size."/>
            <FeatCard icon="🛠️" title="Rich Features" text="Out-of-the-box support for TypeScript, JSX, CSS and more."/>
            <FeatCard icon="📦" title="Optimized Build" text="Pre-configured Rollup build with multi-page and library mode support."/>
            <FeatCard icon="🔩" title="Universal Plugins" text="Rollup-superset plugin interface shared between dev and build."/>
            <FeatCard icon="🔑" title="Fully Typed APIs" text="Flexible programmatic APIs with full TypeScript typing."/>
        </main>
    )
}