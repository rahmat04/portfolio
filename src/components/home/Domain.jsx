import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Typist from "react-typist-component";
import { Jumbotron } from "./migration";
// import computerNetworkImg from '../../assets/img/computer-network.jpg';


const Domain = () => {
  const introRef = useRef();
  const scrollToIntro = () => {
    introRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Jumbotron
      fluid
      id="domain"
      style={{
        background: `linear-gradient(136deg, #4285F4, #34A853, #FBBC05, #EA4335)`,
        backgroundSize: "1200% 1200%",
      }}
      className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
    >
      <div id="stars"></div>
      <Container className="text-center">
        <h1 className="display-1">Computer Networks</h1>
        <Typist>
          <div className="lead typist">
            Domain Portfolio for Algorithmic Problem Solving
          </div>
        </Typist>
        <div className="pt-4">
          <p><strong>Course Name:</strong> Algorithmic Problem Solving</p>
          <p><strong>Course Code:</strong> 23ECSE309</p>
          <p><strong>Name:</strong> Rahmatulla Balur</p> {/* 👈 Name updated */}
          <p><strong>SRN:</strong> 01FE22BCS176</p>
          <p><strong>Course Instructor:</strong> Prakash Hegade</p>
          <p><strong>University:</strong> KLE Technological University, Hubballi-31</p>
          <p><strong>Portfolio Topic/Domain:</strong> Computer Networks</p>
        </div>

        <button
          className="btn btn-outline-light btn-lg mt-3"
          onClick={scrollToIntro}
        >
          More about Domain
        </button>
        {/* 🔍 Introduction Section */}
<div
  ref={introRef}
  className="mt-5 text-start bg-light text-dark p-4 rounded shadow"
>
  <h2 className="mb-3">1. Introduction</h2>

  {/* 🖼️ Optional Image for Computer Networks */}
  <div className="my-4 text-center">
    <img
      src={require("../../assets/img/computer-network.jpg")}
      alt="Computer Networks"
      className="img-fluid rounded shadow-lg"
      style={{ maxHeight: "400px" }}
    />
  </div>

  <p>
    Welcome to my portfolio, where I showcase my learnings from the Algorithmic Problem Solving classes. The domain I’ve chosen to focus on is <strong>Computer Networks</strong>. Through this portfolio, I aim to demonstrate my understanding of advanced algorithms and their applications in solving real-world problems within the domain of computer networking.
  </p>

  <h4 className="mt-4">Why Computer Networks?</h4>
  <p>
    I am fascinated by Computer Networks because they affect almost every part of modern life. Connecting millions of devices, allowing instant communication, and managing huge amounts of data is really interesting to me. Plus, networking technologies are always changing, offering new challenges and opportunities to innovate. My curiosity about how these systems work, along with a desire to make improvements in this field, drives my passion for Computer Networks.
  </p>
</div>
<div className="mt-5 text-start bg-light text-dark p-4 rounded shadow">
  <h2 className="mb-3">Company choosen – Google Cloud</h2>
  <img
    src="https://cloud.google.com/images/social-icon-google-cloud-1200-630.png"
    alt="Google Cloud Logo"
    className="img-fluid rounded shadow"
    style={{ maxWidth: "300px" }}
  />
  <p className="mt-3">
    Google Cloud is at the forefront of cloud and network technology. It enables businesses to scale with cutting-edge cloud networking, edge computing, and secure global infrastructure. 
  </p>
  <h4>Why Google Cloud?</h4>
  <ul>
    <li>🌍 Global infrastructure with high-speed, low-latency backbone.</li>
    <li>🔐 Industry-leading cloud network security.</li>
    <li>💡 Pioneers in Software-Defined Networking (SDN).</li>
    <li>🌐 Offers solutions in multi-cloud and hybrid network management.</li>
    <li>💼 Offers top roles like Cloud Network Engineer, with high compensation.</li>
  </ul>
</div>
{/* 🌐 Google Cloud Business Cases Section */}
<div className="mt-5 text-start bg-light text-dark p-4 rounded shadow">
  <h2 className="mb-3">2. Google Cloud Business Cases</h2>
  <p>
    Google Cloud provides powerful infrastructure and intelligent tools to solve diverse business problems across industries. Below are some key business use cases powered by Google Cloud:
  </p>
  <ul>
    <li className="mb-3">
      <p>
        <strong>📦 Google Cloud CDN – Optimal Content Delivery:</strong><br />
        Delivers cached content from globally distributed edge locations to users with low latency. Ideal for speeding up websites, videos, and APIs for global audiences, reducing server load and improving responsiveness.
      </p>
    </li>
    <li className="mb-3">
      <p>
        <strong>🌐 VPC Network Optimization:</strong><br />
        Virtual Private Cloud (VPC) allows businesses to define IP ranges, manage subnets, firewalls, and custom routing securely across hybrid and multi-cloud environments.
      </p>
    </li>
    <li className="mb-3">
      <p>
        <strong>📊 BigQuery – Query Optimization and Data Indexing:</strong><br />
        A serverless data warehouse for running real-time analytics over large datasets. Automatically handles partitioning and indexing to speed up business intelligence operations.
      </p>
    </li>
    <li className="mb-3">
      <p>
        <strong>🔍 Google Search Engine (Cloud AI-Enhanced):</strong><br />
        Powers enterprise-grade search experiences using advanced language models, global indexing, and relevance tuning for faster access to knowledge across platforms.
      </p>
    </li>
    <li className="mb-3">
      <p>
        <strong>⚖️ Cloud Load Balancing:</strong><br />
        Distributes incoming traffic across backend VMs and containers. Enhances scalability, reduces downtime, and increases application performance under high load.
      </p>
    </li>
    <li className="mb-3">
      <p>
        <strong>📈 Cloud Monitoring & Alerting:</strong><br />
        Monitors infrastructure and services using real-time logs and metrics. Supports anomaly detection and automated alerting for fast incident response.
      </p>
    </li>
    <li className="mb-3">
      <p>
        <strong>🛰️ Cloud Routing Intelligence (BGP Simulation):</strong><br />
        Helps simulate and analyze routing decisions using BGP policies, ensuring optimal path selection and network reliability across global infrastructures.
      </p>
    </li>
  </ul>
</div>

<div className="mt-5 p-4 bg-white rounded shadow text-dark text-start">
  {/* 🌐 Business Case: Google Cloud Network Routing */}
  <h3 className="mb-3">🌐 Business Case: Google Cloud Network Routing</h3>
  <p>
    Google Cloud manages a global private network infrastructure that spans fiber, undersea cables, and regional data centers.
    To ensure minimal latency and efficient data transfer, Google Cloud needs to continuously compute the optimal routing paths
    for data packets across this network. This is especially important for services like Cloud Load Balancing, Cloud CDN, and
    Virtual Private Cloud (VPC) networks, where traffic is dynamically routed based on demand, health, and distance.
  </p>
  <p>
    Routing decisions must account for link congestion, latency, and bandwidth availability—making shortest path algorithms
    vital to achieving high availability and low-latency routing.
  </p>

  {/* 🧠 Dijkstra’s Algorithm */}
  <h4 className="mt-4">🧠 Dijkstra’s Algorithm</h4>
  <p>
    Dijkstra’s Algorithm is a fundamental algorithm used to find the shortest path between nodes in a graph. It works well
    with graphs that have non-negative weights, making it suitable for modeling network latency or routing cost.
  </p>

  <h5 className="mt-3">📌 How It Works</h5>
  <ul>
    <li>Start with the source node and assign a tentative distance value of 0 to it; all other nodes get ∞.</li>
    <li>Visit the unvisited node with the smallest distance value.</li>
    <li>Update the distance of all adjacent neighbors.</li>
    <li>Repeat until the destination node has the shortest known distance or all nodes are visited.</li>
  </ul>

  <h5 className="mt-3">🔧 Application in Google Cloud</h5>
  <ul>
    <li>Used in VPC and Cloud Load Balancer to calculate optimal data transfer routes between regions.</li>
    <li>Improves response time by reducing latency through cost-aware path selection across Google's backbone network.</li>
    <li>Supports intelligent failover by dynamically re-routing traffic using real-time network metrics.</li>
  </ul>

  {/* 🎥 GIF: Visual Demonstration */}
<div className="text-center mt-4">
  <h5>Visual Demonstration</h5>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/5/57/Dijkstra_Animation.gif"
    alt="Dijkstra Algorithm Animation"
    className="img-fluid rounded shadow-sm"
    style={{ maxHeight: "300px" }}
  />

  
</div>
{/* <div className="mt-5 p-4 bg-light rounded shadow text-start text-dark"> */}
  <h3 className="mb-3 text-start">🚚 Delivery Route Optimization</h3>
  
  <p className="text-start">
    In logistics and mapping services like Google Maps, finding the most efficient delivery route is crucial for minimizing cost and time.
    Google Cloud's Routing APIs and services help businesses like food delivery, e-commerce, and transport companies compute accurate and optimized routes in real-time.
  </p>

  {/* ⭐ A* Algorithm */}
  <h4 className="mt-4 text-start">⭐ A* (A-star) Algorithm</h4>
  <p className="text-start">
    A* is a pathfinding and graph traversal algorithm widely used in routing and navigation systems. It is an informed search algorithm,
    meaning it uses heuristics to guide its search. It combines the advantages of Dijkstra’s algorithm (guaranteeing shortest path)
    and Greedy Best-First Search (using heuristics for speed).
  </p>

  <p className="text-start">
    It calculates the cost function:
    <code className="ms-2">f(n) = g(n) + h(n)</code><br />
    where:
  </p>

  <ul className="mt-2 text-start">
    <li><strong>g(n)</strong>: Exact cost from the start node to node <code>n</code>.</li>
    <li><strong>h(n)</strong>: Estimated cost from node <code>n</code> to the goal (heuristic).</li>
  </ul>

  <p className="text-start">
    A* is used in Google Cloud's optimization pipelines to compute delivery routes based on road distances, traffic conditions,
    and priority constraints.
  </p>

  {/* 🌀 Algorithm GIF */}
 {/* 🌀 Algorithm GIF */}
<div className="my-3 text-center">
  <p className="mb-2"><strong>📽️ Algorithm Demonstration:</strong></p>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Astar_progress_animation.gif"
    alt="A* Algorithm in Action"
    className="img-fluid rounded shadow"
    style={{ maxHeight: "400px" }}
  />
</div>
<div className="text-start my-4 p-3 bg-light text-dark rounded shadow">

  <h3>Efficiency Analysis</h3>

  <h4>Dijkstra’s Algorithm</h4>
  <p>
    Dijkstra’s algorithm finds the shortest path from a source node to all other nodes in a weighted graph with non-negative edge weights.
    <br />
    <strong>Time Complexity:</strong> The time complexity depends on the data structure used:
    <ul>
      <li>Using a simple array: <code>O(V²)</code>, where V is the number of vertices.</li>
      <li>Using a binary heap (priority queue): <code>O((V + E) log V)</code>, where E is the number of edges.</li>
    </ul>
    <strong>Space Complexity:</strong> <code>O(V)</code>, mainly for storing distances and priority queue.
  </p>

  <h4>A* Algorithm</h4>
  <p>
    A* is a heuristic-based pathfinding algorithm that optimizes the search by estimating the cost from the current node to the goal.
    <br />
    <strong>Time Complexity:</strong> Depends heavily on the heuristic:
    <ul>
      <li>Best case (perfect heuristic): <code>O(E)</code>, similar to Dijkstra but faster due to guided search.</li>
      <li>Worst case (poor heuristic): Can degrade to <code>O((V + E) log V)</code>, similar to Dijkstra.</li>
    </ul>
    <strong>Space Complexity:</strong> <code>O(V)</code>, for storing nodes in the open and closed sets.
  </p>

</div>

<div className="my-5 text-dark text-start">
 <h3 className="mb-3">📊 Business Case: BigQuery – Query Optimization and Data Indexing</h3>
  <p>
    BigQuery is Google’s fully managed, serverless data warehouse designed to analyze massive datasets quickly and efficiently using SQL queries. It handles petabytes of data, providing real-time analytics and insights for businesses.
  </p>
  <p>
    To optimize query performance, especially for range queries and frequent data updates, BigQuery uses advanced data indexing techniques and data structures like Segment Trees and Fenwick Trees. These structures allow efficient range-based queries, updates, and aggregation operations, significantly improving query response times.
  </p>
  {/* 🔹 Segment Tree Section */}
  <section className="mb-5">
    <h4 className="mb-3">Segment Tree</h4>
    <p>
      A <strong>Segment Tree</strong> is a binary tree used to efficiently store and query information about subarrays (segments) of a list.
      Each node of the segment tree represents a segment or interval of the array and stores aggregated data such as sum, minimum, maximum, etc.
      It is mainly used when there are frequent updates and queries over array ranges.
    </p>
        <p><strong>Working:</strong></p>
    <ul>
      <li>Splits an array into hierarchical segments; each node stores info (sum / min / max) for its range.</li>
      <li>Range queries and single-point updates both run in <code>O(log n)</code>.</li>
      <li>Example &nbsp;(<code>array = [2, 4, 6, 8, 10]</code>): finding the sum of indices 1-3 returns <code>18</code> without scanning every element.</li>
    </ul>

    <p>
      For example, to find the sum or minimum value in a subrange of an array, the segment tree reduces query time to <code>O(log n)</code> instead of <code>O(n)</code>.
      It also supports updates in <code>O(log n)</code> time.
    </p>

    <div className="text-center my-4">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Segment_tree.svg"
    alt="Segment Tree Diagram"
    className="img-fluid rounded shadow"
    style={{ maxWidth: "480px" }}
  />
</div>
  </section>

  {/* 🔹 Fenwick Tree Section */}
  <section>
    <h4 className="mb-3">Fenwick Tree (Binary Indexed Tree)</h4>
    <p>
      A <strong>Fenwick Tree</strong>, or Binary Indexed Tree (BIT), is a data structure that provides efficient methods for prefix sum and
      update operations. It uses bit manipulation to achieve logarithmic time complexity.
    </p>
    <p><strong>Working:</strong></p>
    <ul>
      <li>Stores cumulative frequencies / prefix sums in an array-backed tree.</li>
      <li>Both updates and prefix-sum queries execute in <code>O(log n)</code>.</li>
      <li>Example &nbsp;(<code>[1, 7, 3, 0, 7, 8, 3, 2]</code>): prefix sum 0-5 yields <code>26</code> quickly; updating index 2 propagates to few cells.</li>
    </ul>
    <p>
      Fenwick Trees are more space-efficient than segment trees and are preferred when the operation is mainly on prefix sums (e.g., frequency counting or cumulative frequency tables).
      It provides both <code>update</code> and <code>query</code> operations in <code>O(log n)</code> time.
    </p>

  <div className="text-center my-4">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/7/70/16-node_Fenwick_tree.svg"
    alt="Fenwick Tree Diagram"
    className="img-fluid rounded shadow"
    style={{ maxWidth: "480px" }}
  />
</div>
  </section>

</div>

<div className="mt-5 text-start bg-light text-dark p-4 rounded shadow">
  <h3 className="mb-3">📊 Efficiency Analysis</h3>

  {/* Segment Tree Section */}
  <h4 className="mt-4">🌲 Segment Tree</h4>
  <p>
    A Segment Tree is a binary tree used for storing intervals or segments. It supports efficient range queries and updates.
  </p>
  <ul>
    <li><strong>Build Tree:</strong> O(n)</li>
    <li><strong>Point Update:</strong> O(log n)</li>
    <li><strong>Range Query (e.g., sum/min/max):</strong> O(log n)</li>
    <li><strong>Space Complexity:</strong> O(2n) or up to O(4n)</li>
  </ul>
 
  {/* Fenwick Tree Section */}
  <h4 className="mt-4">🌳 Fenwick Tree (Binary Indexed Tree)</h4>
  <p>
    A Fenwick Tree is a compact data structure useful for prefix sum calculations and point updates.
  </p>
  <ul>
    <li><strong>Build Tree:</strong> O(n)</li>
    <li><strong>Point Update:</strong> O(log n)</li>
    <li><strong>Prefix Query (0 to i):</strong> O(log n)</li>
    <li><strong>Range Query (i to j):</strong> O(log n) using query(j) - query(i - 1)</li>
    <li><strong>Space Complexity:</strong> O(n)</li>
  </ul>

  
</div>

{/* 🌐 Business Case: Cloud Routing Intelligence (BGP Simulation) */}
{/* <div className="mt-5 p-4 bg-white rounded shadow text-dark text-start"> */}
  <h3>🌐 Business Case: Cloud Routing Intelligence (BGP Simulation)</h3>
  <p>
    In enterprise-level cloud networking, Google Cloud enables customers to simulate and optimize BGP path selection
    across multi-cloud and hybrid infrastructures. These simulations help define how routes propagate and ensure optimal
    connectivity between networked services, especially across peered VPCs or interconnects.
  </p>
  <p>
    Constructing minimal-cost spanning trees of the network is key to reducing route propagation overhead and minimizing
    link utilization. This makes Minimum Spanning Tree algorithms such as Kruskal’s and Prim’s ideal for optimizing backbone
    connectivity with minimal cost and maximum coverage.
  </p>

  <h4>🌿 Kruskal’s Algorithm</h4>
  <p>
    Kruskal’s Algorithm is a greedy algorithm that builds a minimum spanning tree by selecting the edges with the lowest
    weights first, ensuring that no cycles are formed. It's especially efficient for sparse graphs.
  </p>

  <h5>📌 How It Works</h5>
  <ul>
    <li>Sort all edges by ascending weight.</li>
    <li>Pick the smallest edge. If it doesn’t form a cycle with the spanning tree, include it.</li>
    <li>Repeat until the spanning tree includes (V - 1) edges for V vertices.</li>
  </ul>

  <h5>🔧 Application in Google Cloud</h5>
  <ul>
    <li>Used to simulate efficient BGP route propagation trees for backbone optimization.</li>
    <li>Reduces link costs by avoiding redundant routing paths in hybrid or multi-region networks.</li>
    <li>Scales well in sparse enterprise topologies where direct connections are limited.</li>
  </ul>


<div style={{ textAlign: "center" }}>
    <h5>Visual Demonstration</h5>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/b/bb/KruskalDemo.gif"
    alt="Kruskal's Algorithm Animation"
    style={{ maxHeight: "300px" }}
  />
</div>


  <h4 className="mt-4">🌿 Prim’s Algorithm</h4>
  <p>
    Prim’s Algorithm is another greedy approach for constructing a minimum spanning tree. It starts with a single node
    and continuously adds the cheapest edge from the tree to a new node until all vertices are connected.
  </p>

  <h5>📌 How It Works</h5>
  <ul>
    <li>Start from any node and mark it as visited.</li>
    <li>Select the edge with the smallest weight that connects a visited node to an unvisited node.</li>
    <li>Repeat until all nodes are visited.</li>
  </ul>

  <h5>🔧 Application in Google Cloud</h5>
  <ul>
    <li>Helpful in VPC peering strategies to avoid excessive links while ensuring all regions are reachable.</li>
    <li>Supports incremental network expansion by selecting optimal paths as new services are added.</li>
    <li>Ensures consistent and minimal delay routing structures in dense cloud environments.</li>
  </ul>


<div style={{ textAlign: "center" }}>
    <h5>Visual Demonstration</h5>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/9/9b/PrimAlgDemo.gif"
    alt="Prim's Algorithm Animation"
    style={{ maxHeight: "300px" }}
  />
</div>

<div className="mt-5 text-start bg-light text-dark p-4 rounded shadow">
  <h3 className="mb-3">📊 Efficiency Analysis</h3>


<p>
  <strong>Kruskal’s Algorithm</strong> has a time complexity of <strong>O(E log E)</strong> primarily due to edge sorting. 
  With an optimized Union-Find structure, it becomes <strong>O(E log V)</strong>. The space complexity is 
  <strong> O(E + V)</strong>, which includes storage for edges and the disjoint set.
</p>
<p>
  <strong>Prim’s Algorithm</strong>, when implemented using a min-priority queue and adjacency list, has a time complexity of 
  <strong> O(E + V log V)</strong>. With a Fibonacci heap, it can be even faster for dense graphs. Its space complexity is 
  <strong> O(V + E)</strong>, accounting for the graph structure and the heap.
</p>

</div>

</div>



{/* 📚 Reference Section */}
<div className="mt-5 p-4 bg-light rounded shadow text-start text-dark">
  <h4 className="mb-3">📚 References</h4>
  <ul className="ps-3">
    <li>
      GeeksforGeeks – Dijkstra’s Algorithm:{" "}
      <a
        href="https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-graph-data-structure/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-dark"
      >
        https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-graph-data-structure/
      </a>
    </li>
    <li>
      Dijkstra Algorithm GIF – Wikimedia Commons:{" "}
      <a
        href="https://upload.wikimedia.org/wikipedia/commons/5/57/Dijkstra_Animation.gif"
        target="_blank"
        rel="noopener noreferrer"
        className="text-dark"
      >
        https://upload.wikimedia.org/wikipedia/commons/5/57/Dijkstra_Animation.gif
      </a>
    </li>
     <li>
      Hart, P. E., Nilsson, N. J., & Raphael, B. (1968). A Formal Basis for the Heuristic Determination of Minimum Cost Paths. <em>IEEE Transactions on Systems Science and Cybernetics</em>, 4(2), 100–107. 
      <br />
      <a href="https://ieeexplore.ieee.org/document/4082128" target="_blank" rel="noopener noreferrer">
        https://ieeexplore.ieee.org/document/4082128
      </a>
    </li>
    <li>
      Russell, S., & Norvig, P. (2021). <em>Artificial Intelligence: A Modern Approach</em> (4th Edition). Pearson.
    </li>
    <li>
  GeeksforGeeks – Kruskal’s Algorithm:{" "}
  <a
    href="https://www.geeksforgeeks.org/kruskals-algorithm-simple-implementation-for-adjacency-matrix/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-dark"
  >
    https://www.geeksforgeeks.org/kruskals-algorithm-simple-implementation-for-adjacency-matrix/
  </a>
</li>

<li>
  GeeksforGeeks – Prim’s Algorithm:{" "}
  <a
    href="https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-dark"
  >
    https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/
  </a>
</li>
<li>
  Programiz – Kruskal’s Algorithm:{" "}
  <a
    href="https://www.programiz.com/dsa/kruskal-algorithm"
    target="_blank"
    rel="noopener noreferrer"
    className="text-dark"
  >
    https://www.programiz.com/dsa/kruskal-algorithm
  </a>
</li>

<li>
  Programiz – Prim’s Algorithm:{" "}
  <a
    href="https://www.programiz.com/dsa/prim-algorithm"
    target="_blank"
    rel="noopener noreferrer"
    className="text-dark"
  >
    https://www.programiz.com/dsa/prim-algorithm
  </a>
</li>

<li>
  Brilliant.org – Minimum Spanning Trees:{" "}
  <a
    href="https://brilliant.org/wiki/minimum-spanning-tree/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-dark"
  >
    https://brilliant.org/wiki/minimum-spanning-tree/
  </a>
</li>

<li>
  TutorialsPoint – Spanning Tree Algorithms:{" "}
  <a
    href="https://www.tutorialspoint.com/data_structures_algorithms/spanning_tree.htm"
    target="_blank"
    rel="noopener noreferrer"
    className="text-dark"
  >
    https://www.tutorialspoint.com/data_structures_algorithms/spanning_tree.htm
  </a>
</li>

<li>
  Wikipedia – Kruskal’s Algorithm:{" "}
  <a
    href="https://en.wikipedia.org/wiki/Kruskal%27s_algorithm"
    target="_blank"
    rel="noopener noreferrer"
    className="text-dark"
  >
    https://en.wikipedia.org/wiki/Kruskal%27s_algorithm
  </a>
</li>

<li>
  Wikipedia – Prim’s Algorithm:{" "}
  <a
    href="https://en.wikipedia.org/wiki/Prim%27s_algorithm"
    target="_blank"
    rel="noopener noreferrer"
    className="text-dark"
  >
    https://en.wikipedia.org/wiki/Prim%27s_algorithm
  </a>
</li>
<li>
  GeeksforGeeks – Segment Tree | Set 1 (Sum of given range):{" "}
  <a
    href="https://www.geeksforgeeks.org/segment-tree-set-1-range-sum-queries/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-dark"
  >
    https://www.geeksforgeeks.org/segment-tree-set-1-range-sum-queries/
  </a>
</li>

<li>
  GeeksforGeeks – Binary Indexed Tree | Set 1 (Introduction):{" "}
  <a
    href="https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-dark"
  >
    https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/
  </a>
</li>

<li>
  Programiz – Segment Tree:{" "}
  <a
    href="https://www.programiz.com/dsa/segment-tree"
    target="_blank"
    rel="noopener noreferrer"
    className="text-dark"
  >
    https://www.programiz.com/dsa/segment-tree
  </a>
</li>

<li>
  CP-Algorithms – Fenwick Tree (Binary Indexed Tree):{" "}
  <a
    href="https://cp-algorithms.com/data_structures/fenwick.html"
    target="_blank"
    rel="noopener noreferrer"
    className="text-dark"
  >
    https://cp-algorithms.com/data_structures/fenwick.html
  </a>
</li>

<li>
  TopCoder Tutorials – Binary Indexed Trees:{" "}
  <a
    href="https://www.topcoder.com/thrive/articles/Binary%20Indexed%20Trees"
    target="_blank"
    rel="noopener noreferrer"
    className="text-dark"
  >
    https://www.topcoder.com/thrive/articles/Binary%20Indexed%20Trees
  </a>
</li>

  </ul>
</div>




      </Container>
    </Jumbotron>
  );
};

export default Domain;
