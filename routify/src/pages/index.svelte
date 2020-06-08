<script>
  import { metadata } from "../content/projects/everpress.md";
  import RoutifyIntro from "./example/_components/RoutifyIntro.svelte";
  import StoryButton from "../components/StoryButton.svelte";

  console.log(metadata);
</script>

<StoryButton storySlug="dark" imgSrc="/projects/dark/thumbnail.jpg">
  Dark
</StoryButton>

<RoutifyIntro />
