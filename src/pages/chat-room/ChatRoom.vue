<template>
  <div class="">
    <div class="py-3 shadow-lg">
      <div class="relative flex items-center space-x-4">
        <div class="relative">
          <span class="absolute text-green-500 right-0 bottom-0">
            <svg width="20" height="20">
              <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
            </svg>
          </span>
          <img
            src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
            alt=""
            class="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
          />
        </div>
        <div class="flex flex-col leading-tight">
          <div class="text-2xl mt-1 flex items-center">
            <span class="text-gray-700 mr-3">Anderson Vanhron</span>
          </div>
          <span class="text-lg text-gray-600">Junior Developer</span>
        </div>
      </div>
    </div>
    <div
      id="messages"
      class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
    >
      <div class="chat-message">
        <div class="flex items-end">
          <div
            class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start"
          >
            <div>
              <span
                class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600"
                >Can be verified on any platform using docker</span
              >
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
            alt="My profile"
            class="w-6 h-6 rounded-full order-1"
          />
        </div>
      </div>
      <div class="chat-message">
        <div class="flex items-end justify-end">
          <div
            class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end"
          >
            <div>
              <span
                class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white"
                >Your error message says permission denied, npm global installs
                must be given root privileges.</span
              >
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
            alt="My profile"
            class="w-6 h-6 rounded-full order-2"
          />
        </div>
      </div>
    </div>
    <div class="absolute bottom-0 w-full p-4">
      <div class="relative flex">
        <input
          type="text"
          placeholder="Write your message!"
          class="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
        />
      </div>
    </div>
  </div>
</template>

<style>
.scrollbar-w-2::-webkit-scrollbar {
  width: 0.25rem;
  height: 0.25rem;
}

.scrollbar-track-blue-lighter::-webkit-scrollbar-track {
  --bg-opacity: 1;
  background-color: #f7fafc;
  background-color: rgba(247, 250, 252, var(--bg-opacity));
}

.scrollbar-thumb-blue::-webkit-scrollbar-thumb {
  --bg-opacity: 1;
  background-color: #edf2f7;
  background-color: rgba(237, 242, 247, var(--bg-opacity));
}

.scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
  border-radius: 0.25rem;
}
</style>

<script>
const el = document.getElementById("messages");
// el.scrollTop = el.scrollHeight;
</script>
